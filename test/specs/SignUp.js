import HomePage from "../pageObjects/HomePageObj";
import SignUpPage from "../pageObjects/SignUpPageObj";
import herokuObjUtil from "../utils/herokuObjUtil";
import reporter from "../utils/reporter";
import moment from "moment";

const strDateTime = moment(new Date()).format('YYYYMMDDHHmm')
const strEmail = `test_${strDateTime}25@test.com`

describe('Heroku App Signup Test', () => {
    it('Heroku App SignUp_TC001', async () => {
        await reporter.addLog('Step 1: Navigate to Herokuapp Website');
        await HomePage.navigate();

        await reporter.addLog('Step 2: Click Signup button to Navigate to Signup Page');
        await herokuObjUtil.clickObject(HomePage.signUpNavigateButton);

        await reporter.addLog('Step 3: Verify If User Navigate to Signup Page');
        await expect(browser).toHaveUrl(expect.stringContaining('addUser'));

        await reporter.addLog('Step 4: User Fill First Name Field');
        await herokuObjUtil.setObjectValue(SignUpPage.signUpFirstName, "SampleFirstName");

        await reporter.addLog('Step 5: User Fill Last Name Field');
        await herokuObjUtil.setObjectValue(SignUpPage.signUpLastName, "SampleLastName");

        await reporter.addLog(`Step 6: User Fill Email Field: ${strEmail}`);
        await herokuObjUtil.setObjectValue(SignUpPage.signUpEmail, strEmail);

        await reporter.addLog('Step 7: User Fill Password Field');
        await herokuObjUtil.setObjectValue(SignUpPage.signUpPassword, "SamplePassword");

        await reporter.addLog('Step 8: Click Submit Button');
        await herokuObjUtil.clickObject(SignUpPage.signUpSubmit);

        await expect(browser).toHaveUrl(expect.stringContaining('contactList'));
        await reporter.addLog('Singup Successfully!');
    })
})