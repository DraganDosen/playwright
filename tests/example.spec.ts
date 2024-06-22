import { test, expect } from '@playwright/test';
test.describe('My tests', () => {
  test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    // run test with: npx playwright test
    // show result with: npx playwright show-report
    // add extension in vscode - playwright test and then can run tests from cv code
    // add playwright test snippets now can use- pw
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });
  test.describe('dragan test', () => {
    test('', async ({ page }) => {
      await page.goto('https://playwright.dev/');
  
    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();
  
    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    })
    
    
  })
  
  
  test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  
    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();
  
    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
  test('new', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  })
  
    
})

