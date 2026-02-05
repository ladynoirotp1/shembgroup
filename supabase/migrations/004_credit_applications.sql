-- Credit / trade application form. Service role inserts; no public read.
create table if not exists public.credit_applications (
  id uuid primary key default gen_random_uuid(),
  company_name text not null,
  contact_name text not null,
  email text not null,
  phone text,
  message text,
  created_at timestamptz not null default now()
);

create index if not exists credit_applications_created_at_idx on public.credit_applications(created_at desc);

alter table public.credit_applications enable row level security;
