import { test, expect } from "@playwright/test";

test("writing index lists the notes", async ({ page }) => {
  await page.goto("/writing", { waitUntil: "networkidle" });

  await expect(page.getByRole("heading", { level: 1 })).toContainText("Notes from the build");
  await expect(page.getByRole("link", { name: /The server owns the save/ })).toBeVisible();
  await expect(page.getByRole("link", { name: /A QR code is a UI decision/ })).toBeVisible();
  await expect(page.getByRole("link", { name: /Measure the frame/ })).toBeVisible();
});

test("opens an MDX post with its custom components", async ({ page }) => {
  await page.goto("/writing", { waitUntil: "networkidle" });

  await page.getByRole("link", { name: /The server owns the save/ }).click();

  await expect(page).toHaveURL(/\/writing\/the-server-owns-the-save$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "The server owns the save",
  );
  await expect(page.getByText("Archived project")).toBeVisible();
  await expect(page.locator("pre")).toHaveCount(1);
  await expect(
    page.locator("#main").getByRole("link", { name: /All writing/ }),
  ).toBeVisible();
});

test("the measurement note keeps its archived context", async ({ page }) => {
  await page.goto("/writing/measure-the-frame", { waitUntil: "networkidle" });

  await expect(page.getByText("Archived repo")).toBeVisible();
  await expect(page.getByText("Reproduce it")).toBeVisible();
  await expect(page.getByRole("link", { name: /Valescent Engine/ })).toBeVisible();
});

test("unknown routes use the custom 404", async ({ page }) => {
  const response = await page.goto("/this-page-does-not-exist");

  expect(response?.status()).toBe(404);
  await expect(
    page.getByRole("heading", { name: "This page did not ship." }),
  ).toBeVisible();
});
