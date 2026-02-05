# Deploying to Vercel

## 1. Connect Git and push (fix "origin does not appear to be a git repository")

Your code must be on GitHub (or GitLab/Bitbucket) before Vercel can deploy it.

**One-time setup:**

1. **Create a new repo on GitHub:** [github.com/new](https://github.com/new) — name it e.g. `shembgroup-site`, leave "Add README" unchecked.
2. **Add the remote and push** from the `shembgroup-site` folder:

   ```bash
   cd /path/to/shembgroup-site
   ./scripts/setup-git-remote.sh https://github.com/YOUR_USERNAME/shembgroup-site.git
   ```

   Replace `YOUR_USERNAME` and the repo name with your GitHub username and repo.  
   If the script isn’t executable: `chmod +x scripts/setup-git-remote.sh` then run it again.

   **Or do it manually:**

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/shembgroup-site.git
   git push -u origin main
   ```

3. **Import in Vercel:** [vercel.com/new](https://vercel.com/new) → Import your Git repository → add env vars (e.g. `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`) → Deploy.

After that, every `git push origin main` will trigger a new deploy.

---

## 2. If you see "No Next.js version detected"

Your repo might have the app in a **subfolder** (e.g. `shembgroup-site`). Vercel needs to build from that folder.

1. In **Vercel Dashboard** → your project → **Settings** → **General**.
2. Under **Root Directory**, click **Edit**.
3. Set it to the folder that contains `package.json` and `next.config.ts`, e.g. **`shembgroup-site`** (no leading slash).
4. Save, then **Redeploy** from the Deployments tab.

After that, the build should detect Next.js and run `next build` correctly.
