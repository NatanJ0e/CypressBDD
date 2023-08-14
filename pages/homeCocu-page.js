const {page} = require('../config/hooks.js')

class HomePage{
    async access(){
       return (await page).goto('https://www.cocus.com/en/')
    }

    async aceptCokies(){
        (await page).click('//*[@id="cmplz-cookiebanner-container"]/div/div[6]/button[1]');
    }

    async clickButtonStartNow(){
        (await page).click('//*[@id="content"]/div/div[1]/section[7]/div/div/div/div[3]/div/div/a');
    }

    async assertContact(){
        (await page).getByText('contact us').isVisible()
    }
}
module.exports = {HomePage};