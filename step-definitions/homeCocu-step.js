const { Given, When, Then} = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const {HomePage} = require('../pages/homeCocu-page.js')

let home = new HomePage()

Given('i access the cocus website', async function () {
    await home.access()  
})

When('I click on accept coockies and click on button start now', async function () {
    await home.aceptCokies()
    await home.clickButtonStartNow()
});

Then('I should be able to see the the contact page', async function () {
    await home.assertContact()
});
