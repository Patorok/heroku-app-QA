export default new class SignUpPage {
    get signUpFirstName() { return $('//input[@id="firstName"]') }
    get signUpLastName() { return $('//input[@id="lastName"]') }
    get signUpEmail() { return $('//input[@id="email"]') }
    get signUpPassword() { return $('//input[@id="password"]') }
    get signUpSubmit() { return $('//button[@id="submit"]') }
}