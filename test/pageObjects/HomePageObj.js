export default new class HomePage {
    get signUpNavigateButton() { return $('//button[@id="signup"]') }
    get homeEmailField() { return $('//input[@id="email"]')}
    get homePasswordField() { return $('//input[@id="password"]') }
    get homeSubmitButton() { return $('//button[@id="submit"]') }

    async navigate(){
        await browser.url("https://thinking-tester-contact-list.herokuapp.com/")
    }
}