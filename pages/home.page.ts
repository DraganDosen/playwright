import {Page, Locator} from '@playwright/test';
// this is for auto sugestion for homepage

class HomePage {
  //  page: any;
 //   getStartedBtn: any;
 ///   goTo: any;

   page: Page;
   //getStartedBtn: Locator;
   getStartedBtn: Locator;
   

   goTo: any;
   searchBtn: Locator;
    constructor (page: Page){
        this.page = page;
        //*[@id="__docusaurus_skipToContent_fallback"]/header/div/div/a
        this.getStartedBtn = page.locator("text=Get started");
      // this.getStartedBtn = page.locator('//*[@id="__docusaurus_skipToContent_fallback"]/header/div/div/a');
        this.goTo = page.goto('https://playwright.dev/');
        
        this.searchBtn = page.locator('//*[@id="__docusaurus"]');
    }
    async navigate() {
       await  this.goTo;
      // await  this.page.locator("text=Get started").click();
      // await  this.goTo;
    }
  
    async getStartClick() {
      //await  this.page.locator("text=Get started").click();
      //await  this.page.locator('//*[@id="__docusaurus"]').click();
      //How to install Playwright
      //await  this.goTo;
      // await  this.page.locator("text=Get started").click();
      await  this.getStartedBtn.click();
       await this.page.locator("text=How to install Playwright").isVisible();
       await this.page.locator("text=How to install Playwright").click();
     }
}
export default HomePage;