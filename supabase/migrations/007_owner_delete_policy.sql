-- Allow owners to delete client profiles (for removing rejected applications from admin dashboard).
create policy "Owners can delete client profiles"
  on public.profiles for delete
  using (public.is_owner());
