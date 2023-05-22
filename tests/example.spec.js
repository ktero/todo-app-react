// @ts-check
import { test, expect } from '@playwright/test'


test.beforeEach( async ({page}) => {
  await page.goto('http://localhost:5173/')
   await expect(page).toHaveURL(/localhost:5173/)
})

test.describe("TODO app", () => {
  
  test("Check URL", async ({page}) => {
    await expect(page).toHaveURL(/localhost:5173/)
  })
})