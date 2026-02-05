-- Run this entire file in Supabase Dashboard → SQL Editor → New query → Paste all → Run.
-- Creates public.profiles and RLS (001 + 002 combined).

-- 001: profiles table
create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade unique,
  company_name text,
  approval_status text not null default 'pending' check (approval_status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists profiles_user_id_idx on public.profiles(user_id);
alter table public.profiles enable row level security;
create policy "Users can read own profile" on public.profiles for select using (auth.uid() = user_id);
create policy "Users can insert own profile" on public.profiles for insert with check (auth.uid() = user_id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = user_id);
create or replace function public.set_updated_at() returns trigger as $$ begin new.updated_at = now(); return new; end; $$ language plpgsql;
drop trigger if exists profiles_updated_at on public.profiles;
create trigger profiles_updated_at before update on public.profiles for each row execute function public.set_updated_at();

-- 002: role + email + owner policies
alter table public.profiles add column if not exists role text not null default 'client' check (role in ('client', 'owner'));
alter table public.profiles add column if not exists email text;
create policy "Owners can read all profiles" on public.profiles for select using (exists (select 1 from public.profiles p where p.user_id = auth.uid() and p.role = 'owner'));
create policy "Owners can update any profile" on public.profiles for update using (exists (select 1 from public.profiles p where p.user_id = auth.uid() and p.role = 'owner'));
