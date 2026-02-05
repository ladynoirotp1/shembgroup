# Run Supabase migrations from the terminal

After a one-time link, you can push and add migrations without opening the Supabase site.

## One-time setup: link your project

1. **Log in to Supabase CLI** (if you haven’t):
   ```bash
   npx supabase login
   ```
   Complete the browser login.

2. **Link this repo to your remote project** (from the project root):
   ```bash
   cd /path/to/shembgroup-site
   npx supabase link --project-ref YOUR_PROJECT_REF
   ```
   - **YOUR_PROJECT_REF** = the ID in your Supabase URL:  
     `https://YOUR_PROJECT_REF.supabase.co`  
     (e.g. from `https://zziswiukvakzyanobkib.supabase.co` the ref is `zziswiukvakzyanobkib`).
   - When prompted, enter your **database password** (Supabase Dashboard → Project Settings → Database → Database password).

After this, the CLI remembers the project and you don’t need to link again.

---

## Push existing migrations (apply to remote DB)

From the project root:

```bash
npm run db:push
```
(or `npx supabase db push`)

This runs all migrations in `supabase/migrations/` that haven’t been applied yet on the linked project.

---

## Add a new migration

1. **Create a new migration file**:
   ```bash
   npm run db:new -- add_something
   ```
   (or `npx supabase migration new add_something`)
   That creates e.g. `supabase/migrations/20250204120000_add_something.sql`.

2. **Edit the new file** and add your SQL (e.g. `CREATE TABLE`, `ALTER TABLE`, `CREATE POLICY`).

3. **Apply it**:
   ```bash
   npm run db:push
   ```

---

## Useful commands

| Command | What it does |
|--------|----------------------|
| `npm run db:push` | Apply pending migrations to the linked remote project |
| `npm run db:new -- <name>` | Create a new empty migration file |
| `npx supabase db pull` | Pull current remote schema into a migration (if you changed DB in the dashboard) |
| `npx supabase db diff -f <name>` | Generate a migration from schema changes you made in the dashboard |

Run these from the **shembgroup-site** directory (where `supabase/config.toml` lives).
