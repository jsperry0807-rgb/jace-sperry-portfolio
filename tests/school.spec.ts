import { test, expect } from "@playwright/test";

test("ECTS portfolio covers the graduation requirements", async ({ page }) => {
  await page.goto("/ects", { waitUntil: "networkidle" });

  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Jace Sperry");
  await expect(
    page.getByRole("heading", { name: "Graduation portfolio checklist" }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Work Samples" })).toBeVisible();
  await expect(page.locator("#work-samples article")).toHaveCount(6);
  await expect(
    page.getByRole("heading", { name: "CareerSafe & Future Ready PA" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Advanced Training Day" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Honor Roll Award" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Home School Reflection" }),
  ).toBeVisible();
  await expect(page.getByRole("button", { name: /Print/ })).toBeVisible();

  const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
  expect(new URL(canonical!).pathname).toBe("/ects");
});

test("portfolio tabs switch between all three portfolios", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  const tabs = page.getByRole("navigation", { name: "Portfolios" });
  await expect(tabs.getByRole("link", { name: "Personal" })).toHaveAttribute(
    "aria-current",
    "page",
  );

  await tabs.getByRole("link", { name: "ECTS" }).click();
  await expect(page).toHaveURL(/\/ects$/);
  await expect(tabs.getByRole("link", { name: "ECTS" })).toHaveAttribute(
    "aria-current",
    "page",
  );

  await tabs.getByRole("link", { name: "North East" }).click();
  await expect(page).toHaveURL(/\/north-east$/);
  await expect(tabs.getByRole("link", { name: "North East" })).toHaveAttribute(
    "aria-current",
    "page",
  );
});

test("North East portfolio includes the home school reflection", async ({ page }) => {
  await page.goto("/north-east", { waitUntil: "networkidle" });

  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Jace Sperry");
  await expect(
    page.getByRole("heading", { name: "Reflection on Home School" }),
  ).toBeVisible();
  await expect(
    page.getByText("North East High School has been the steady half"),
  ).toBeVisible();
});

test("print layout hides site chrome and switches to the light theme", async ({ page }) => {
  await page.emulateMedia({ media: "print" });
  await page.goto("/ects", { waitUntil: "networkidle" });

  await expect(page.locator("header").first()).toBeHidden();
  await expect(page.getByRole("navigation", { name: "Portfolios" })).toBeHidden();
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  const background = await page.evaluate(
    () => getComputedStyle(document.body).backgroundColor,
  );
  expect(background).toBe("rgb(255, 255, 255)");
});
