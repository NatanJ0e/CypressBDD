const { chromium } = require('playwright');

 class driveFactory{
    async drive(){

    const browser = await chromium.launch({ headless: false, slowMo: 150 });
    const context = await browser.newContext();
    const page = await context.newPage();
    return page;
    }


}
module.exports = { driveFactory };