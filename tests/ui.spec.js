// @ts-check
import { test, expect } from '@playwright/test'

test.beforeEach( async ({page}) => {
  await page.goto('/')
  await expect(page).toHaveURL(/localhost:3000/)
})

test.describe("TODO app", () => {
  
  test("Should add TODO item with title and description", async ({page}) => {
    await page.locator('[data-test="item"]').fill('This is the title')
    await page.locator('[data-test="description"]').fill('This is the description')
    await page.locator('[data-test="button-add-todo"]').click()

    await expect(page.locator('[data-test="todo-title"]')).toHaveText('This is the title')
    await expect(page.locator('[data-test="todo-description"]')).toHaveText('This is the description')
  })

  test("Should add TODO item with title only", async ({page}) => {
    await page.locator('[data-test="item"]').fill('This is the title')
    await page.locator('[data-test="button-add-todo"]').click()

    await expect(page.locator('[data-test="todo-title"]')).toHaveText('This is the title')
  })

  test("Should not add TODO item with description only", async ({page}) => {
    await page.locator('[data-test="description"]').fill('This is the description')
    await page.locator('[data-test="button-add-todo"]').click()

    await expect(page.locator('[data-test="todo-list"]')).toHaveText('No Todos')
  })
})