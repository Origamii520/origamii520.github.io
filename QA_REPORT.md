# Verification report — 2026-10-29

- Node 22.19.0; npm 10.9.3; Git 2.54.0.windows.1; FFmpeg / ffprobe 8.1.
- GitHub CLI 2.103.3 installed locally using winget; no GitHub login yet.
- npm install, production build, TypeScript check and ESLint passed. Production dependency audit: zero vulnerabilities reported.
- Browser: installed Google Chrome via Playwright, local production preview at 127.0.0.1:4173.
- 360 / 390 / 768 / 1280 / 1920 pixel layouts: no horizontal overflow.
- Chinese/English, persistent dark/light theme, all category filters, details, mobile menu and menu closing: passed.
- All four 1280×720, 90-second video files decoded and playback time advanced; zero video requests before click. No page exceptions or HTTP errors during the automated interaction checks.
- Reviewed desktop hero, project grid and mobile project card screenshots; posters are real source frames. Lazy images are decoded before dedicated card screenshots.
- All six distinct external destinations (personal GitHub, four repositories and Robonix Catalog) returned HTTP 200.
- Lighthouse 12 local mobile run after accessibility/SEO fixes: Performance 99, Accessibility 100, Best Practices 100, SEO 100. These are local simulated measurements, not public-site or real-user metrics. Remaining performance suggestions concern responsive images, unused React JS and CSS rendering cost.
- Raw results, screenshots and Lighthouse JSON remain in ignored .local/qa.

## Evidence and conservative content decisions

Biography and contribution scope use the supplied instructions and local resume. Current user-provided research/admission statuses take precedence over older resume wording. Source repository README and catalog describe team capabilities; individual contribution wording does not claim sole authorship.

Certificate scans verified: 2024 National Scholarship; 2025 national IoT finals second prize; 2025 Second National Innovation Engineering Competition, undergraduate third prize. The latter corrects the resume's different event name. Two e-paper software copyright registrations name Northeastern University as owner; the site attributes them as project outputs. Other honors follow the resume, without unsupported dates. The conflicting FLTRP award is omitted pending the specific certificate.

No separate MiniCPM adaptation repository was found in the searched desktop application materials and workspace. This bounded search is not proof none exists. The website labels the linked OpenBMB repository as upstream. Exact start dates for tracking/simulation/sport are omitted pending project-specific records.

## Privacy limits

Source videos were sampled every 30 seconds to establish mapping and identify risk. Tracking includes an identifiable person; real-robot recordings show laboratory interiors, local browser/service endpoints and voices. These are flagged for owner review, not declared cleared. No resume, certificate, phone number field, ID number, address or original video is copied into the website. The supplied contact email is deliberately included.

Publication and remote Actions execution remain unverified until owner approval and authentication.

Owner explicitly approved the public file list and media permissions on 2026-10-29. npm ci passed after stopping Windows processes holding esbuild.exe. Lighthouse tooling upgraded to 13.6.0 to resolve development-tool dependency advisories; full npm audit now reports zero vulnerabilities. Original reported Lighthouse scores refer to the recorded version-12 run.
