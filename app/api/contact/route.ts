import { NextRequest, NextResponse } from "next/server";

// TODO: wire to Supabase `contact_submissions` / `chat_leads` table and
// trigger a Resend alert email, per the master brief. For now this
// validates and accepts the payload so the form works end-to-end.
export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.workEmail || !body.fullName) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
