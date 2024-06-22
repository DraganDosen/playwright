import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';
import HomePage from '../pages/home_trans.page';


    test.describe('describe 2', () => {
        let homePage: HomePage;
        test('test 2', async ({ page }) => {
          // await page.goto('https://playwright.dev/');
            homePage = new HomePage (page);
            await homePage.navigate();
          
        }) })

        

        
   

