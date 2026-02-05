-- Contact form submissions. Only backend (service role) can read; anyone can submit via server action.
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamptz not null default now()
);

create index if not exists contact_submissions_created_at_idx on public.contact_submissions(created_at desc);

-- RLS: no public access. Server action uses service role to insert; only admins (via dashboard/service role) can read.
alter table public.contact_submissions enable row level security;

-- No policies: anon and authenticated cannot select/insert/update/delete. Service role bypasses RLS.
