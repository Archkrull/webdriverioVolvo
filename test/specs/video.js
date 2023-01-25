const assert = require('assert')


describe('test for Volvo - a million more page', () => {
   it('should have the Correct Page title', async () => {
    const url = await browser.url("https://www.volvocars.com/intl/v/car-safety/a-million-more")
      /*console.log(url);*/
       const browserTitle = await browser.getTitle()
       assert.strictEqual(browserTitle, 'A million more | Volvo Cars - International')
   })

   it('should show the main video container', () => {
    const mainVideo = $('.a cr df dg dh di')
    expect(mainVideo).toBeDisplayed();
})

   it('should detect if button on main video can be clicked', () => {
    const startMainVideoBtn = $('.ac ae ag aw cv cw cy cz da db dc dd de dj ee ef eg eh ei ej ek el em en eo ep eq er es et eu ev ew ex ey ez fa fb fc fd fe m')

    // wait for element and then click
    browser.waitUntil(() => startMainVideoBtn.click())
})
it('should show the all video testimonial containers', () => {
    const testimonial = $('#videoTestimonials:container')
    expect(testimonial).toBeDisplayed();
})
it('should detect if the buttons button on testimonial videos can be clicked', () => {
    const startTestimonialBtn = $('.a ac aw ct cu cv cw cx cy cz da db dc de dn eb ed hq pj pk pl pw px')

    // wait for element and then click
    browser.waitUntil(() => startTestimonialBtn.click())
})

})