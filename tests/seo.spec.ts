import { test, expect } from "@playwright/test";

test("home metadata and structured data", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
  expect(canonical).toBeTruthy();
  expect(new URL(canonical!).pathname).toBe("/");

  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    /student full-stack engineer/i,
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    /opengraph-image/,
  );

  const jsonLd = await page.locator('script[type="application/ld+json"]').first().textContent();
  expect(jsonLd).toBeTruthy();
  expect(JSON.parse(jsonLd!)).toMatchObject({
    "@type": "Person",
    name: "Jace Sperry",
  });
});

test("feeds and discovery routes", async ({ request }) => {
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  const sitemapText = await sitemap.text();
  expect(sitemapText).toContain("/writing/measure-the-frame");
  expect(sitemapText).toContain("/writing/the-server-owns-the-save");
  expect(sitemapText).toContain("/ects");
  expect(sitemapText).toContain("/north-east");

  const feed = await request.get("/feed.xml");
  expect(feed.status()).toBe(200);
  expect(feed.headers()["content-type"]).toContain("application/rss+xml");
  const feedText = await feed.text();
  expect(feedText).toContain("<rss");
  expect(feedText).toContain("The server owns the save");

  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain("Sitemap:");

  const manifest = await request.get("/manifest.webmanifest");
  expect(manifest.status()).toBe(200);
  expect(await manifest.json()).toMatchObject({ name: expect.stringContaining("Jace Sperry") });

  const icon = await request.get("/icon.svg");
  expect(icon.status()).toBe(200);
  expect(icon.headers()["content-type"]).toContain("image/svg+xml");

  const og = await request.get("/opengraph-image");
  expect(og.status()).toBe(200);
  expect(og.headers()["content-type"]).toContain("image/png");
});

test("security headers", async ({ request }) => {
  const response = await request.get("/");
  const headers = response.headers();

  expect(headers["x-content-type-options"]).toBe("nosniff");
  expect(headers["x-frame-options"]).toBe("DENY");
  expect(headers["referrer-policy"]).toBe("strict-origin-when-cross-origin");
  expect(headers["content-security-policy"]).toContain("default-src 'self'");
  expect(headers["x-powered-by"]).toBeUndefined();
});
