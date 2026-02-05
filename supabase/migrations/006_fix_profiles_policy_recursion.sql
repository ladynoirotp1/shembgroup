-- Fix infinite recursion in profiles RLS policies.
-- The "Owners can read/update all profiles" policies used subqueries that select
-- from profiles, which triggered RLS again -> infinite recursion.
-- Solution: use a SECURITY DEFINER function that bypasses RLS for the owner check.

create or replace function public.is_owner()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.profiles p
    where p.user_id = auth.uid() and p.role = 'owner'
  );
$$;

drop policy if exists "Owners can read all profiles" on public.profiles;
drop policy if exists "Owners can update any profile" on public.profiles;

create policy "Owners can read all profiles"
  on public.profiles for select
  using (public.is_owner());

create policy "Owners can update any profile"
  on public.profiles for update
  using (public.is_owner());
