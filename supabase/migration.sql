-- Chivora — contact_submissions and capability_downloads tables
-- Run this once in the Supabase SQL Editor for project aitudxtpdokvaeqmyzfo.

create table if not exists contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  request_type text not null default 'contact', -- 'contact' or 'health-check'
  full_name text not null,
  work_email text not null,
  company text,
  job_title text,
  source_systems text[],
  platform text,
  domains text[],
  stage text,
  role text,
  domains_count text,
  quality_concerns text,
  partner_engaged text,
  message text
);

create table if not exists capability_downloads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text,
  role text
);

alter table contact_submissions enable row level security;
alter table capability_downloads enable row level security;

-- The site uses the public anon key server-side, and only ever inserts —
-- it never reads rows back. These policies allow inserts from anyone
-- (the form itself is the gate) and block all reads/updates/deletes via
-- the anon key, so submitted data can only be read from the Supabase
-- dashboard or with the service role key.
create policy "Allow anon insert" on contact_submissions
  for insert to anon
  with check (true);

create policy "Allow anon insert" on capability_downloads
  for insert to anon
  with check (true);
