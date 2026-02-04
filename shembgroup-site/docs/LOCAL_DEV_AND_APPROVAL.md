# Local dev and approval flow

## Avoid email links on localhost (recommended for dev)

When **Confirm email** is enabled in Supabase, new users must click a link in an email to activate their account. That link redirects to your app (e.g. `http://localhost:3000/auth/callback`). If you read email on your phone, you can't open localhost from there.

**Option A – Disable email confirmation (easiest for local dev)**

1. In [Supabase Dashboard](https://supabase.com/dashboard) → your project.
2. Go to **Authentication** → **Providers** → **Email**.
3. Turn **OFF** "Confirm email".
4. New signups get an account immediately with no email link. You can turn it back **ON** when you deploy to production.

**Option B – Use email on the same machine**

Open your email (e.g. Gmail in the same browser or machine where you run `npm run dev`). When you click the confirmation link, the redirect goes to `http://localhost:3000/auth/callback` on that machine, so it works.

---

## One-time setup: profiles table in Supabase

The approval flow uses a `profiles` table. Create it once:

1. In Supabase Dashboard → **SQL Editor** → **New query**.
2. Open the file `supabase/migrations/001_profiles.sql` in this repo, copy its contents, Run.
3. Open the file `supabase/migrations/002_owner_role.sql`, copy its contents, Run.

You should see "Success. No rows returned." The table, role column, and RLS policies are now in place.

---

## Owner login and admin dashboard

The site has an **owner** role. The owner logs in with the same **Login** page. If their email matches `OWNER_EMAIL` in `.env.local`, they are redirected to **/admin** instead of **/account**.

**Setup**

1. In `.env.local` add: `OWNER_EMAIL=your-owner-email@example.com`
2. Register that email as a normal user (or use an existing account).
3. Run the migration `002_owner_role.sql` so the `role` column and owner RLS exist.
4. Log in with that email → you'll be redirected to **/admin** (Owner dashboard).

**What the owner sees**

- **Pending approvals** – List of new signups with **Approve** / **Reject** buttons.
- **All customers** – Table of every client (approved, pending, rejected).

The header shows an **Admin** link when the logged-in user is the owner.

---

## How to approve a user (via admin dashboard)

1. Log in as owner (email = `OWNER_EMAIL`) → you land on **/admin**.
2. Under **Pending approvals**, click **Approve** or **Reject** for each signup.
3. Approved users see the **Account** dashboard; rejected users see "Application declined".

You can still change `approval_status` manually in Supabase **Table Editor** → **profiles** if needed.

---

## Flow summary

1. User registers → account created, profile created with `approval_status: pending`.
2. User logs in → goes to **Account** → sees "Pending approval".
3. Owner logs in → goes to **Admin** → approves or rejects from the dashboard.
4. Approved user refreshes or logs in again → sees the **Dashboard** (Catalog, Order history, Invoices placeholders).
