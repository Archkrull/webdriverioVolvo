const assert = require('assert')

describe('test for Volvo - a million more page', () => {
   it('should have the Correct Page title', async () => {
       const url = await browser.url("https://www.volvocars.com/intl/v/car-safety/a-million-more")
      console.log(url);
       const browserTitle = await browser.getTitle()
       assert.strictEqual(browserTitle, 'A million more | Volvo Cars - International')
   })
   
it('should detect if the link (learn more about care safety) is clickable', () => {
    const link = $('#iconCallouts:cta')
    let clickable = link.isClickable();
    console.log(clickable); // outputs: true or false

    // wait for element to be clickable
    browser.waitUntil(() => link.isClickable().click())
})

it('should redirect to a new page and verify the title', () => {
    expect(browser).toHaveTitle('Safety - Highlights | Volvo Cars')
})

})

/* ./node_modules/.bin/wdio run wdio.conf.js */

