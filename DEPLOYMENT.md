# GitHub Pages deployment

LIVE — verified 2026-10-29 (Asia/Shanghai).

- Website: https://origamii520.github.io/
- Repository: https://github.com/Origamii520/origamii520.github.io
- Initial successful deployment: https://github.com/Origamii520/origamii520.github.io/actions/runs/40888592499
- GitHub account verified: Origamii520, ID 214653863.
- Owner explicitly approved the public file list and media permissions before repository creation/push.
- Authenticated lookup confirmed no existing same-name repository before creation. No existing project was overwritten.
- Pages source: GitHub Actions (build_type=workflow). Vite base: /.
- Homepage and all four video endpoints returned HTTP 200; video MIME type video/mp4. Full browser acceptance suite passed against the public URL.

## Update

Edit src/data for content, src/components or src/sections for presentation, and src/styles for design. Stop running Vite servers before npm ci on Windows to avoid executable locks.

npm ci
npm run lint
npm run build
npm run preview -- --port 4173
node scripts/verify.mjs

git add .
git diff --cached --check
git diff --cached --stat
git commit -m "Update portfolio"
git push origin main

Each push to main runs npm ci, lint and TypeScript/Vite build; the workflow uploads dist and deploys it with pages:write and id-token:write. Inspect GitHub Actions for the exact pushed commit. After success, run:

node scripts/verify.mjs https://origamii520.github.io/

## Authentication on another machine

Install GitHub CLI, then gh auth login --hostname github.com --web --git-protocol https. Verify gh api user --jq .login returns Origamii520. Use gh auth setup-git when necessary. Never store access tokens in this project.

## Media and privacy

Do not commit original videos, resumes or certificates. VIDEO_INVENTORY.md, PUBLISH_REVIEW.md and .local are intentionally ignored. The current 90-second video derivatives and real-frame posters were approved by the owner. Review privacy and copyright again for new/replacement media. Do not force-add ignored files or force-push repository history.

No paid hosting, custom domain, Git LFS, external video platform, database or backend is required. Keep package-lock.json tracked.
