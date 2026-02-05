# Create the `profiles` table in Supabase

If you see **"Could not find the table 'public.profiles' in the schema cache" (PGRST205)**, the `profiles` table doesn't exist in your Supabase project yet. Create it by running the migrations.

## Run everything in one go

1. Open **[Supabase Dashboard](https://supabase.com/dashboard)** and select the project your app uses (the one whose URL is in `NEXT_PUBLIC_SUPABASE_URL`).
2. Go to **SQL Editor** → **New query**.
3. Open **`docs/supabase_run_all_migrations.sql`** in this repo, copy its entire contents, paste into the SQL Editor, and click **Run**.

After it runs successfully, the `profiles` table and policies exist and the admin page should work.

## Alternative: run migrations one by one

You can instead run **`supabase/migrations/001_profiles.sql`** then **`supabase/migrations/002_owner_role.sql`** as two separate queries in the SQL Editor.
