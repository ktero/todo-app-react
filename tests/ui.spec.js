// @ts-check
import { test, expect } from '@playwright/test'

test.beforeEach( async ({page}) => {
  await page.goto('/')
  await expect(page).toHaveURL(/localhost:3000/)
})

test.describe("TODO app", () => {
  
  test("Should add TODO item with title and description and should be able to delete the TODO item", async ({page}) => {
    await page.locator('[data-test="item"]').fill('This is the title')
    await page.locator('[data-test="description"]').fill('This is the description')
    await page.locator('[data-test="button-add-todo"]').click()

    await expect(page.locator('[data-test="todo-title"]')).toHaveText('This is the title')
    await expect(page.locator('[data-test="todo-description"]')).toHaveText('This is the description')

    await page.locator('[data-test="button-delete"]').click()
    await expect(page.locator('[data-test="todo-list"]')).toHaveText('No Todos')
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

  test("Should edit TODO item after clicking save", async ({page}) => {
    await page.locator('[data-test="item"]').fill('This is the title')
    await page.locator('[data-test="description"]').fill('This is the description')
    await page.locator('[data-test="button-add-todo"]').click()

    await expect(page.locator('[data-test="todo-title"]')).toHaveText('This is the title')
    await expect(page.locator('[data-test="todo-description"]')).toHaveText('This is the description')

    // Update both title and description
    await page.locator('[data-test="button-edit"]').click()
    await page.locator('[data-test="edit-item"]').fill('This is the updated title')
    await page.locator('[data-test="edit-description"]').fill('This is the updated description')
    await page.locator('[data-test="button-edit-save"]').click()
    await expect(page.locator('[data-test="todo-title"]')).toHaveText('This is the updated title')
    await expect(page.locator('[data-test="todo-description"]')).toHaveText('This is the updated description')

    // Update title only
    await page.locator('[data-test="button-edit"]').click()
    await page.locator('[data-test="edit-item"]').fill('This is the updated title the second')
    await page.locator('[data-test="button-edit-save"]').click()
    await expect(page.locator('[data-test="todo-title"]')).toHaveText('This is the updated title the second')
    await expect(page.locator('[data-test="todo-description"]')).toHaveText('This is the updated description')

    // Update description only
    await page.locator('[data-test="button-edit"]').click()
    await page.locator('[data-test="edit-description"]').fill('This is the updated description the second')
    await page.locator('[data-test="button-edit-save"]').click()
    await expect(page.locator('[data-test="todo-title"]')).toHaveText('This is the updated title the second')
    await expect(page.locator('[data-test="todo-description"]')).toHaveText('This is the updated description the second')

    // Update nothing and click save
    await page.locator('[data-test="button-edit"]').click()
    await page.locator('[data-test="button-edit-save"]').click()
    await expect(page.locator('[data-test="todo-title"]')).toHaveText('This is the updated title the second')
    await expect(page.locator('[data-test="todo-description"]')).toHaveText('This is the updated description the second')
  })
})