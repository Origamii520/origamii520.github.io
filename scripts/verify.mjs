import { chromium } from "playwright";
import fs from "node:fs/promises";
const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({ reducedMotion: "reduce" });
await page.clock.setFixedTime(new Date(2026, 9, 30, 21, 0));
const errors = [];
const videos = [];
page.on("pageerror", (e) => errors.push(e.message));
page.on("response", (r) => {
  if (r.status() >= 400) errors.push(r.status() + " " + r.url());
});
page.on("request", (r) => {
  if (r.url().includes("/videos/")) videos.push(r.url());
});
await fs.mkdir(".local/qa", { recursive: true });
await page.goto(process.argv[2] || "http://127.0.0.1:4173");
await page.waitForLoadState("networkidle");
if (videos.length) throw Error("Videos loaded without click");
const layouts = [];
for (const width of [360, 390, 768, 1280, 1920]) {
  await page.setViewportSize({ width, height: 1000 });
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > innerWidth,
  );
  if (overflow) throw Error("Overflow " + width);
  layouts.push({ width, overflow });
  await page.screenshot({
    path: ".local/qa/" + width + ".png",
    fullPage: true,
  });
}
await page.setViewportSize({ width: 1280, height: 900 });
await page.getByRole("button", { name: "Switch to English" }).click();
if ((await page.locator("html").getAttribute("lang")) !== "en")
  throw Error("Language");
await page.getByRole("button", { name: "Toggle color theme" }).click();
if ((await page.locator("html").getAttribute("data-theme")) !== "light")
  throw Error("Theme");
await page.screenshot({ path: ".local/qa/light-en.png", fullPage: true });
for (const category of ["Robotics", "Systems", "Research"]) {
  await page.getByRole("button", { name: category, exact: true }).click();
  const count = await page.locator("#projects article").count();
  if (count !== (category === "Research" ? 3 : 2))
    throw Error("Filter " + category);
}
await page.getByRole("button", { name: "All work", exact: true }).click();
await page.locator("summary").first().click();
if (!((await page.locator("details").first().getAttribute("open")) !== null))
  throw Error("Details");
const playback = [];
for (let i = 0; i < 4; i++) {
  await page.locator(".poster").first().click();
  const video = page.locator("video").nth(i);
  await video.evaluate(async (v) => {
    v.muted = true;
    await v.play();
  });
  await page.waitForTimeout(900);
  const info = await video.evaluate((v) => ({
    duration: v.duration,
    width: v.videoWidth,
    height: v.videoHeight,
    time: v.currentTime,
    error: v.error?.code,
  }));
  if (!info.width || info.time === 0 || info.error)
    throw Error("Playback " + i);
  await video.evaluate((v) => v.pause());
  playback.push(info);
}
await page.setViewportSize({ width: 390, height: 844 });
await page.getByRole("button", { name: "Toggle navigation" }).click();
if ((await page.locator("header nav").isVisible()) !== true)
  throw Error("Mobile menu");
await page.getByRole("link", { name: "Contact", exact: true }).click();
if (await page.locator("header nav").isVisible())
  throw Error("Mobile menu did not close");
await page.reload();
if ((await page.locator("html").getAttribute("data-theme")) !== "dark")
  throw Error("Reload must reset theme to local time");
await fs.writeFile(
  ".local/qa/results.json",
  JSON.stringify(
    {
      layouts,
      playback,
      initialVideoRequests: 0,
      errors,
      checks: [
        "language",
        "theme",
        "filters",
        "details",
        "mobile menu",
        "persistence",
      ],
    },
    null,
    2,
  ),
);
await browser.close();
if (errors.length) throw Error(errors.join("\n"));
console.log(
  "PASS: responsive layouts, controls, lazy loading and four video playback checks",
);
