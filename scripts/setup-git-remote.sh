#!/usr/bin/env bash
# Add GitHub remote and push (run from repo root: shembgroup-site)
set -e
cd "$(dirname "$0")/.."

if git remote get-url origin 2>/dev/null; then
  echo "Remote 'origin' is already set. Pushing to main..."
  git push -u origin main
  exit 0
fi

if [ -z "$1" ]; then
  echo "Usage: $0 <repo-url>"
  echo "Example: $0 https://github.com/YOUR_USERNAME/shembgroup-site.git"
  echo ""
  echo "Create the repo on GitHub first (github.com/new), then run this with its URL."
  exit 1
fi

git remote add origin "$1"
echo "Added remote origin. Pushing main..."
git push -u origin main
echo "Done. Connect this repo in Vercel (Add New → Project → Import) to enable deploys."
