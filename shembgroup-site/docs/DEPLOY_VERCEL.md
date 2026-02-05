# Deploying to Vercel

## If you see "No Next.js version detected"

Your repo might have the app in a **subfolder** (e.g. `shembgroup-site`). Vercel needs to build from that folder.

1. In **Vercel Dashboard** → your project → **Settings** → **General**.
2. Under **Root Directory**, click **Edit**.
3. Set it to the folder that contains `package.json` and `next.config.ts`, e.g. **`shembgroup-site`** (no leading slash).
4. Save, then **Redeploy** from the Deployments tab.

After that, the build should detect Next.js and run `next build` correctly.
