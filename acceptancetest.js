const { remote } = require('webdriverio');
const assert = require('assert');

let browser;

;(async ()=>{
    browser =await remote({
        capabilities: {browserName: 'chrome'}
    })

    await browser.navigateTo('https://bmi-calculator0.herokuapp.com/')

    const weightInput = await browser.$('#weight')
    await weightInput.setValue('10')

    const heightInput = await browser.$('#height')
    await heightInput.setValue('1.2')

    const searchBtn = await browser.$('#calculate')
    await searchBtn.click();

    const pageTitle = await browser.getTitle();

    //assert(pageTitle === 'http://localhost:3000/');

   await browser.deleteSession();
})().catch((err)=>{
    console.error(err);
    return browser.deleteSession();
})