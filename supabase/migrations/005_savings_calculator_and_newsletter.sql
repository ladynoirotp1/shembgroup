-- Savings calculator leads (homepage modal form)
create table if not exists public.savings_calculator_leads (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  mobile text,
  email text not null,
  shop_name text,
  current_supplier text,
  weekly_deliveries text,
  business_type text,
  created_at timestamptz not null default now()
);

alter table public.savings_calculator_leads enable row level security;

-- Newsletter signups (footer)
create table if not exists public.newsletter_signups (
  id uuid primary key default gen_random_uuid(),
  first_name text,
  last_name text,
  mobile text,
  email text not null,
  created_at timestamptz not null default now()
);

create unique index if not exists newsletter_signups_email_idx on public.newsletter_signups(email);
alter table public.newsletter_signups enable row level security;
