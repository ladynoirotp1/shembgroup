-- Run this in Supabase Dashboard → SQL Editor after 001_profiles.sql.
-- Adds owner role, email (for admin display), and RLS so the owner can see and approve pending signups.

alter table public.profiles
  add column if not exists role text not null default 'client' check (role in ('client', 'owner'));

alter table public.profiles
  add column if not exists email text;

-- Owners can read all profiles (for approval dashboard)
create policy "Owners can read all profiles"
  on public.profiles for select
  using (
    exists (
      select 1 from public.profiles p
      where p.user_id = auth.uid() and p.role = 'owner'
    )
  );

-- Owners can update any profile (for approve/reject)
create policy "Owners can update any profile"
  on public.profiles for update
  using (
    exists (
      select 1 from public.profiles p
      where p.user_id = auth.uid() and p.role = 'owner'
    )
  );
