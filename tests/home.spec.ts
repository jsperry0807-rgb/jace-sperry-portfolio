import { test, expect } from "@playwright/test";

test("renders the portfolio and its core content", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page).toHaveTitle(/Jace Sperry/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("I build software");
  await expect(
    page.getByRole("heading", { name: /Software, from schema to screen/ }),
  ).toBeAttached();

  for (const project of ["Snack Cart", "Offense Tracker", "Voxel Engine", "ECTS Housing"]) {
    await expect(
      page.getByRole("heading", { name: project, exact: true }),
    ).toBeAttached();
  }

  await expect(page.getByRole("heading", { name: "Cinderfall", exact: true })).toHaveCount(0);
  await expect(page.getByRole("link", { name: /Website Upgrader/ })).toBeAttached();

  await page.getByRole("heading", { name: "What the repos say" }).scrollIntoViewIfNeeded();
  await expect(page.getByText("Contributions / last 12 months")).toBeVisible();

  await expect(
    page.getByRole("link", { name: "jsperry0807@gmail.com" }),
  ).toBeAttached();

  expect(errors).toEqual([]);
});

test("desktop navigation scrolls and marks the active section", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  const header = page.locator("header");
  await header.getByRole("link", { name: "Work", exact: true }).click();

  await expect(page).toHaveURL(/#work$/);
  await expect(header.getByRole("link", { name: "Work", exact: true })).toHaveAttribute(
    "aria-current",
    "location",
  );
});

test("copies the email address", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await page.getByRole("heading", { name: /Have something worth building/ }).scrollIntoViewIfNeeded();
  await page.getByRole("button", { name: "Copy address" }).click();

  await expect(page.getByRole("button", { name: "Copied" })).toBeVisible();

  const clipboard = await page.evaluate(() => navigator.clipboard.readText());
  expect(clipboard).toBe("jsperry0807@gmail.com");
});

test.describe("mobile", () => {
  test.use({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });

  test("menu opens, navigates, and the page does not overflow", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });

    await page.getByRole("button", { name: "Open menu" }).click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();

    await dialog.getByRole("link", { name: /Writing/ }).click();
    await expect(dialog).toBeHidden();
    await expect(page).toHaveURL(/#writing/);

    const overflows = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(overflows).toBe(false);
  });
});

test.describe("reduced motion", () => {
  test.use({ reducedMotion: "reduce" });

  test("hydrates cleanly and keeps the hero visible", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    page.on("pageerror", (error) => errors.push(error.message));

    await page.goto("/", { waitUntil: "networkidle" });
    await page.waitForTimeout(800);

    await expect(page.getByRole("heading", { level: 1 })).toHaveCSS("opacity", "1");
    expect(
      await page.evaluate(() => matchMedia("(prefers-reduced-motion: reduce)").matches),
    ).toBe(true);
    expect(errors).toEqual([]);
  });
});
