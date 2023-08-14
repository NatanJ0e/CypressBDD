const {driveFactory} = require('../driveFactory.js')
const { BeforeAll, AfterAll, Before, After } = require('@cucumber/cucumber');

let page = new driveFactory().drive()


Before(async () => {
    console.log('before all...');
    return page

});

After(async () => {
    console.log('after all...');
    return (await page.then()).close()
});

module.exports = {page};