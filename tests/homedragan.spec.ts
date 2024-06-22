import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';
import HomePage from '../pages/home.page';
test.describe('describe 1', () => {
    let homePage: HomePage;
    test('1', async ({ page }) => {
        homePage = new HomePage (page);
        await homePage.goTo;
       // await page.goto('https://playwright.dev/');
        

        // Create a locator.
const getStarted = page.getByRole('link', { name: 'Get started' });

// Click it.
await getStarted.click();
    })})
    test.describe('describe 2', () => {
        let homePage: HomePage;
        test('test 2', async ({ page }) => {
          // await page.goto('https://playwright.dev/');
            homePage = new HomePage (page);
            await homePage.navigate();
     
        }) })
        test.describe('describe 3', () => {
            let homePage: HomePage;
            test('test 3', async ({ page }) => {
                homePage = new HomePage (page);
            await homePage.navigate();
            await homePage.getStartClick();
            })
         })

        
   

