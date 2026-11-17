import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

const pages = [
  { name: "home", path: "/" },
  { name: "writing index", path: "/writing" },
  { name: "post", path: "/writing/the-server-owns-the-save" },
  { name: "ECTS portfolio", path: "/ects" },
  { name: "North East portfolio", path: "/north-east" },
  { name: "404", path: "/this-page-does-not-exist" },
];

for (const { name, path } of pages) {
  test(`no WCAG A/AA violations on ${name}`, async ({ page }) => {
    await page.goto(path, { waitUntil: "networkidle" });

    // Reveal components start hidden; walk the page so every section mounts.
    await page.evaluate(async () => {
      const step = Math.max(window.innerHeight * 0.8, 400);
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(400);

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(
      results.violations,
      JSON.stringify(results.violations, null, 2),
    ).toEqual([]);
  });
}
