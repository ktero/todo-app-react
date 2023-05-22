// @ts-check
import { test, expect } from '@playwright/test'


test.beforeEach( async ({page}) => {
  await page.goto('http://localhost:5173/')
  await expect(page).toHaveURL(/localhost:3000/)
})

test.describe("TODO app", () => {
  
  test("Add TODO item with title and description", async ({page}) => {
    await expect(page).toHaveURL(/localhost:3000/)
    await page.getByLabel('New Item').fill('This is the title');
    await page.getByLabel('Add description').fill('This is the description');
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByText('TitleDescription').click();
  })
})