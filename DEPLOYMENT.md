# GitHub Pages deployment

Status: LOCAL BUILD READY; not published. GitHub CLI 2.103.3 was installed with winget. gh auth status reports no authenticated hosts. Anonymous API inspection was rate-limited; unauthenticated git ls-remote returned Repository not found. This does not establish absence of a private repository. Recheck after authentication before creating anything.

## Before publishing

1. Owner reviews PUBLISH_REVIEW.md and the local preview, including people, laboratory interiors, screens and recorded voices. Approval must precede public repository creation or push.
2. In PowerShell, run: & 'C:/Program Files/GitHub CLI/gh.exe' auth login --hostname github.com --web --git-protocol https
3. Run gh auth status and gh api user --jq .login. Require Origamii520.
4. Run gh repo view Origamii520/origamii520.github.io --json nameWithOwner,isPrivate,defaultBranchRef,url. If it exists, inspect its tree and branch before integrating; never force push. If absent, after approval use gh repo create Origamii520/origamii520.github.io --public --source . --remote origin (without automatic push).
5. Review git status, git diff --cached and file sizes. Do not force-add ignored files. Commit approved source and derivatives. git push -u origin main.
6. In repository Settings > Pages, set Build and deployment > Source to GitHub Actions. The included workflow builds using npm ci, lint and TypeScript/Vite build, uploads dist, and deploys with pages:write and id-token:write permissions. If the first run precedes Pages setup, rerun it.
7. Inspect gh run list and gh run view --log-failed as needed. Verify successful deploy and HTTP 200 at the target homepage, all four video paths, and both language/theme modes. Only then report the public portfolio as live.

Target hostname (NOT yet verified live): origamii520.github.io
Vite base is /. No custom domain, paid hosting, Git LFS or external video service is required.

## Updates

Edit data/components, regenerate reviewed media only if needed, then npm run lint and npm run build. Commit and push main; Actions redeploys automatically. Keep package-lock.json tracked. For existing deployments, preserve repository history and review changes before pushing. GitHub Pages is public; local preview and ignored review documents are not access controls for files that are pushed.
