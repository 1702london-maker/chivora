import { NextRequest, NextResponse } from "next/server";
import { buildSystemPrompt } from "@/lib/chat/systemPrompt";

export const runtime = "nodejs";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

// Very small in-memory rate limiter per server instance. Not durable across
// deploys/instances, but stops obvious abuse without needing a database.
const requestLog = new Map<string, number[]>();
const RATE_LIMIT = 30;
const RATE_WINDOW_MS = 60 * 60 * 1000;

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT;
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Chat is not configured yet." },
      { status: 503 }
    );
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many messages. Please try again shortly." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  const messages: ChatMessage[] | undefined = body?.messages;

  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: "No messages provided." }, { status: 400 });
  }

  const trimmed = messages
    .slice(-12)
    .filter((m) => m && typeof m.content === "string" && m.content.trim().length > 0)
    .map((m) => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: m.content.slice(0, 2000),
    }));

  if (trimmed.length === 0) {
    return NextResponse.json({ error: "No messages provided." }, { status: 400 });
  }

  const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      temperature: 0.6,
      max_tokens: 400,
      messages: [{ role: "system", content: buildSystemPrompt() }, ...trimmed],
    }),
  });

  if (!openaiRes.ok) {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 502 }
    );
  }

  const data = await openaiRes.json();
  const reply: string =
    data?.choices?.[0]?.message?.content?.trim() ??
    "Sorry, I didn't quite catch that — could you try asking again?";

  return NextResponse.json({ reply });
}
