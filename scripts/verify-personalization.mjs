import { chromium } from "playwright";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 1000 } });
const url = process.argv[2] || "http://127.0.0.1:4173";
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
await fs.mkdir(".local/qa", { recursive: true });
for (const [hour, minute, expected] of [
  [6, 59, "dark"],
  [7, 0, "light"],
  [18, 59, "light"],
  [19, 0, "dark"],
]) {
  await page.clock.setFixedTime(new Date(2026, 9, 30, hour, minute));
  await page.goto(url);
  await page.locator(".portrait-link img").waitFor();
  assert.equal(await page.locator("html").getAttribute("data-theme"), expected);
  await page.getByRole("button", { name: "切换明暗主题" }).click();
  assert.equal(
    await page.locator("html").getAttribute("data-theme"),
    expected === "dark" ? "light" : "dark",
  );
  await page.reload();
  await page.locator(".portrait-link img").waitFor();
  assert.equal(await page.locator("html").getAttribute("data-theme"), expected);
}
for (const [hour, theme] of [
  [10, "light"],
  [21, "dark"],
]) {
  await page.clock.setFixedTime(new Date(2026, 9, 30, hour, 0));
  await page.goto(url);
  await page.locator(".portrait-link img").evaluate((i) => i.decode());
  await page.screenshot({ path: ".local/qa/personal-" + theme + ".png" });
  await page.locator("#experience").scrollIntoViewIfNeeded();
  assert.equal(await page.locator(".school-seal img").count(),5);
  for (const logo of await page.locator(".school-seal img").all()) {
    await logo.scrollIntoViewIfNeeded();
    await logo.evaluate((i) => i.decode());
    assert.ok(await logo.evaluate((i) => i.naturalWidth > 0));
  }
  await page.waitForTimeout(750);
  await page
    .locator("#experience")
    .screenshot({ path: ".local/qa/experience-" + theme + ".png" });
}
await page.setViewportSize({ width: 390, height: 844 });
await page.goto(url);
await page.locator(".portrait-link img").evaluate((i) => i.decode());
await page.screenshot({ path: ".local/qa/personal-mobile.png" });
await page.locator('#experience').scrollIntoViewIfNeeded();
for (const logo of await page.locator('.school-seal img').all()) {
  await logo.scrollIntoViewIfNeeded();
  await logo.evaluate(i => i.decode());
}
await page.waitForTimeout(750);
await page.locator('#experience').screenshot({path:'.local/qa/logos-mobile.png'});
assert.equal(
  await page.evaluate(() => document.documentElement.scrollWidth > innerWidth),
  false,
);
for (const href of [
  "https://www.pku.edu.cn/",
  "https://www.neu.edu.cn/",
  "https://syswonder.org/",
  "https://github.com/syswonder",
  "https://robonix.ai/",
]) {
  assert.ok(
    await page
      .locator("#experience a")
      .evaluateAll(
        (links, href) =>
          links.some((a) => a.href === href && a.rel.includes("noopener")),
        href,
      ),
  );
}
await page.emulateMedia({ reducedMotion: "reduce" });
assert.equal(
  await page
    .locator(".portrait-link")
    .evaluate((e) => getComputedStyle(e).transitionDuration),
  "0s",
);
assert.deepEqual(errors, []);
await browser.close();
console.log(
  "PASS: time boundaries, manual toggle/reset, images, institution links, mobile layout, reduced motion",
);
