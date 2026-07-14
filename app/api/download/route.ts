import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// TODO: send the actual PDF via Resend, per the master brief.
export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.email || !body.name) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!supabase) {
    return NextResponse.json({ error: "Form storage is not configured yet." }, { status: 503 });
  }

  const { error } = await supabase.from("capability_downloads").insert({
    name: body.name,
    email: body.email,
    company: body.company ?? null,
    role: body.role ?? null,
  });

  if (error) {
    return NextResponse.json({ error: "Something went wrong saving your request." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
