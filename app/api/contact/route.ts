import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// TODO: trigger a Resend alert email on new submissions, per the master brief.
export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.workEmail || !body.fullName) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!supabase) {
    return NextResponse.json({ error: "Form storage is not configured yet." }, { status: 503 });
  }

  const { error } = await supabase.from("contact_submissions").insert({
    request_type: body.requestType === "health-check" ? "health-check" : "contact",
    full_name: body.fullName,
    work_email: body.workEmail,
    company: body.company ?? null,
    job_title: body.jobTitle ?? null,
    source_systems: body.sourceSystems ?? null,
    platform: body.platform ?? null,
    domains: body.domains ?? null,
    stage: body.stage ?? null,
    role: body.role ?? null,
    domains_count: body.domainsCount ?? null,
    quality_concerns: body.qualityConcerns ?? null,
    partner_engaged: body.partnerEngaged ?? null,
    message: body.message ?? null,
  });

  if (error) {
    return NextResponse.json({ error: "Something went wrong saving your submission." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
