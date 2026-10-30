# Xiuqi Zhang — Robotics & Systems Portfolio

React + TypeScript + Vite, bilingual Chinese/English, dark/light themes, responsive project catalog and click-to-load video demonstrations. No backend, paid API or remote font dependency.

## Run

Requires Node.js 22 and npm. Run npm ci, then npm run dev. Production: npm run build and npm run preview. Stop development/preview processes before npm ci on Windows to avoid locking esbuild.exe.

Theme defaults use the visitor’s local time: light from 08:00 (inclusive) to 20:00 (exclusive), dark for the other 12 hours. Manual switching applies to the current visit; reopening or reloading resets to the time-based default. Keep the initialization in index.html and timeTheme in src/App.tsx aligned. Verify boundaries with node scripts/verify-personalization.mjs.

## Maintain

- src/data/profile.ts: biography, education, skills, honors and contact
- src/data/projects.ts: projects, bilingual descriptions, source URLs, video IDs
- src/data/research.ts: research status and contributions
- src/components/VideoDemo.tsx: click-to-load HTML5 player
- src/sections/Projects.tsx: data-driven filtering and detail disclosure
- src/styles/main.css: responsive design and reduced-motion support
- public/videos and public/images: optimized demonstration excerpts and actual frame posters

Add a project record and matching ID.mp4 / ID.webp assets. Optional catalog URLs fall back to the source README. For externally hosted public video, extend the data model with a reviewed URL; do not inject arbitrary HTML.

## Media

Use Python 3 and FFmpeg/ffprobe on PATH:

python scripts/process-videos.py --source "PATH_TO_ORIGINAL_PROJECTS"

The script finds uniquely named source files, never modifies originals, generates 90-second continuous excerpts at 1280×720 with aspect-ratio padding, H.264/AAC (if an original audio stream exists), faststart and WebP posters. It verifies the actual file size is below 35 MiB and records original SHA-256 hashes, media metadata and exact excerpt ranges. VIDEO_INVENTORY.md and .local/media.json are local-only because they contain original filesystem paths. No full-length original belongs in Git.

## Verification

npm run typecheck
npm run lint
npm run build
node scripts/verify.mjs
node scripts/visual-check.mjs

Browser checks require the preview on port 4173 and installed Google Chrome. Reports and screenshots go to ignored .local/qa. See QA_REPORT.md. Browser playback checks establish decoding and advancing playback, not a complete semantic or privacy review of every frame and sound.

## Publication and attribution

See DEPLOYMENT.md. Public publication requires the owner's explicit approval of the actual file list and media privacy review. No resume PDF or certificate images are included. Upstream MiniCPM, Unitree SDK, MuJoCo and Robonix resources belong to their authors. This repository does not relicense third-party code or claim ownership of foundation models.
