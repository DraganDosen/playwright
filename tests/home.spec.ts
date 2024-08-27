nemanja123
import { test, expect } from '@playwright/test';
test.describe('Home', () => {
    test('Open HomePage and verify title', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/');
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    })
    test('get started link', async ({ page }) => {
        await page.goto('https://playwright.dev/');
      
        // Click the get started link.
        await page.getByRole('link', { name: 'Get started' }).click();
      
        // Expects page to have a heading with the name of Installation.
        await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
      });
    
})
