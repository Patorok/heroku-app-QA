import HomePage from "../pageObjects/HomePageObj";
import HerokuAppO from "../pageObjects/HerokuAppObj";
import herokuObjUtil from "../utils/herokuObjUtil";
import reporter from "../utils/reporter";
import file from "../utils/herokuFile";
import fs from "fs"
import assert from "assert"

const contanctUsers = [
    {
        firstName: "Patrick",
        lastName: "Jacinto",
        birthDate: "2002-04-15",
        email: "pjSample@gmail.com",
        phone: "1234567890",
        address1: "pjSample Address 1",
        address2: "pjSample Address 2",
        city: "Malolos",
        province: "Bulacan",
        postal: "3000",
        country: "Philippines",
    },
    {
        firstName: "Jeneses",
        lastName: "Galang",
        birthDate: "2002-04-15",
        email: "jg@gmail.com",
        phone: "1234567890",
        address1: "jgSample Address 1",
        address2: "jgSample Address 2",
        city: "Malolos",
        province: "Bulacan",
        postal: "3000",
        country: "Philippines",
    },
    {
        firstName: "Angel",
        lastName: "Galang",
        birthDate: "2002-04-15",
        email: "ag@gmail.com",
        phone: "1234567890",
        address1: "agSample Address 1",
        address2: "agSample Address 2",
        city: "Malolos",
        province: "Bulacan",
        postal: "3000",
        country: "Philippines",
    },
]

const { Sample, HerokuAppObj } = HerokuAppO;

function getRandomFourDigit() {
    return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
}
let newPostalValue = getRandomFourDigit();

const folder = '/home/citco/Repositories/heroku-app/tc006_result'

describe('Heroku App Test', () => {
    it.skip('Heroku App Login User_TC002', async () => {
        await reporter.addLog('Step 1: Navigate to Herokuapp Website');
        await HerokuAppObj.navigate();

        await reporter.addLog('Step 2: User Fill Email Field');
        await herokuObjUtil.setObjectValue(HomePage.homeEmailField, "test_20241024133525@test.com");

        await reporter.addLog('Step 3: User Fill Password Field');
        await herokuObjUtil.setObjectValue(HomePage.homePasswordField, "SamplePassword");

        await reporter.addLog('Step 4: Click Submit Button');
        await herokuObjUtil.clickObject(HomePage.homeSubmitButton)

        await expect(browser).toHaveUrl(expect.stringContaining('contactList'));
        await reporter.addLog('Login Successfully');
    })
    it.skip('Heroku App Add Contact_TC003', async () => {
        await reporter.addLog('Step 1: Navigate to Herokuapp Website');
        await HomePage.navigate();

        await reporter.addLog('Step 2: User Fill Email Field');
        await herokuObjUtil.setObjectValue(HomePage.homeEmailField, "test_20241024133525@test.com");

        await reporter.addLog('Step 3: User Fill Password Field');
        await herokuObjUtil.setObjectValue(HomePage.homePasswordField, "SamplePassword");

        await reporter.addLog('Step 4: Click Submit Button');
        await herokuObjUtil.clickObject(HomePage.homeSubmitButton)

        await expect(browser).toHaveUrl(expect.stringContaining('contactList'));
        await reporter.addLog('Login Successfully');

        for (let i = 0; i < contanctUsers.length; i++) {
            await reporter.addLog('Step 1: Click "Add new Contact" Button to Navigate to Add Contact Page');
            await herokuObjUtil.clickObject(HerokuAppObj.addNewContactButton);

            await reporter.addLog('Step 2: Verify If User Navigate to Add Contact Page');
            await expect(browser).toHaveUrl(expect.stringContaining('addContact'));

            await reporter.addLog('Step 3: User Fill First Name Field');
            await herokuObjUtil.setObjectValue(HerokuAppObj.addContactFirstName, contanctUsers[i].firstName);

            await reporter.addLog('Step 4: User Fill Last Name Field');
            await herokuObjUtil.setObjectValue(HerokuAppObj.addContactLastName, contanctUsers[i].lastName);

            await reporter.addLog('Step 5: User Fill Date of Birth Field');
            await herokuObjUtil.setObjectValue(HerokuAppObj.addContactBirthdate, contanctUsers[i].birthDate);

            await reporter.addLog('Step 6: User Fill Email Field');
            await herokuObjUtil.setObjectValue(HerokuAppObj.addContactEmail, contanctUsers[i].email);

            await reporter.addLog('Step 7: User Fill Phone Field');
            await herokuObjUtil.setObjectValue(HerokuAppObj.addContactPhone, contanctUsers[i].phone);

            await reporter.addLog('Step 8: User Fill Street Address 1 Field');
            await herokuObjUtil.setObjectValue(HerokuAppObj.addContactAddress1, contanctUsers[i].address1);

            await reporter.addLog('Step 9: User Fill Street Address 2 Field');
            await herokuObjUtil.setObjectValue(HerokuAppObj.addContactAddress2, contanctUsers[i].address2);

            await reporter.addLog('Step 10: User Fill City Field');
            await herokuObjUtil.setObjectValue(HerokuAppObj.addContactCity, contanctUsers[i].city);

            await reporter.addLog('Step 11: User Fill State or Province Field');
            await herokuObjUtil.setObjectValue(HerokuAppObj.addContactProvince, contanctUsers[i].province);

            await reporter.addLog('Step 12: User Fill Postal Code Field');
            await herokuObjUtil.setObjectValue(HerokuAppObj.addContactPostal, contanctUsers[i].postal);

            await reporter.addLog('Step 13: User Fill Country Field');
            await herokuObjUtil.setObjectValue(HerokuAppObj.addContactCountry, contanctUsers[i].country);

            await reporter.addLog('Step 14: Click Submit Button');
            await herokuObjUtil.clickObject(HerokuAppObj.addContactSubmitBtn);

            await expect(browser).toHaveUrl(expect.stringContaining('contactList'));

            await expect(HerokuAppObj.newTableData).toHaveText(`${contanctUsers[i].firstName} ${contanctUsers[i].lastName}`)
            await reporter.addLog(`New Contact Created: ${contanctUsers[i].firstName} ${contanctUsers[i].lastName}`);
        }
    })
    it.skip('Heroku App Edit Contact_TC004', async () => {
        await reporter.addLog('Step 1: Navigate to Herokuapp Website');
        await HomePage.navigate();

        await reporter.addLog('Step 2: User Fill Email Field');
        await herokuObjUtil.setObjectValue(HomePage.homeEmailField, "test_20241024133525@test.com");

        await reporter.addLog('Step 3: User Fill Password Field');
        await herokuObjUtil.setObjectValue(HomePage.homePasswordField, "SamplePassword");

        await reporter.addLog('Step 4: Click Submit Button');
        await herokuObjUtil.clickObject(HomePage.homeSubmitButton)

        await expect(browser).toHaveUrl(expect.stringContaining('contactList'));
        await reporter.addLog('Login Successfully');

        await reporter.addLog('Step 5: Click The First Contact Name in The Table');
        await herokuObjUtil.clickObject(HerokuAppObj.newTableData);

        await expect(browser).toHaveUrl(expect.stringContaining('contactDetails'));
        await reporter.addLog('Verify If User Navigate to Add Contact Detail Page');

        await reporter.addLog('Step 6: Click Edit Contact Button');
        await herokuObjUtil.clickObject(HerokuAppObj.editContactButton);

        await expect(browser).toHaveUrl(expect.stringContaining('editContact'));
        await reporter.addLog('Verify If User Navigate to Edit Contact Page');

        const oldPostalValue = await herokuObjUtil.getObject(HerokuAppObj.spanPostalCode)

        await reporter.addLog('Verify If User Clear Value of Postal Code Field');
        await HerokuAppObj.addContactPostal.clearValue();
        
        await reporter.addLog('Step 7: User Fill New Value of Postal Code Field');
        await herokuObjUtil.setObjectValue(HerokuAppObj.addContactPostal, `${newPostalValue}`);

        await reporter.addLog('Step 8: Click Submit Button of Edit Contact Page');
        await herokuObjUtil.clickObject(HerokuAppObj.addContactSubmitBtn);

        await browser.pause(2000)

        await expect(browser).toHaveUrl(expect.stringContaining('contactDetails'));
        // assert(oldPostalValue !== await herokuObjUtil.getObjectText(HerokuAppObj.spanPostalCode));
        await reporter.addLog(`Postal Code Updated Successfully New Postal Code: ${await herokuObjUtil.getObjectText(HerokuAppObj.spanPostalCode)}`);
    })
    it.skip('Heroku App Delete Contact_TC005', async () => {
        await reporter.addLog('Step 1: Navigate to Herokuapp Website');
        await HomePage.navigate();

        await reporter.addLog('Step 2: User Fill Email Field');
        await herokuObjUtil.setObjectValue(HomePage.homeEmailField, "test_20241024133525@test.com");

        await reporter.addLog('Step 3: User Fill Password Field');
        await herokuObjUtil.setObjectValue(HomePage.homePasswordField, "SamplePassword");

        await reporter.addLog('Step 4: Click Submit Button');
        await herokuObjUtil.clickObject(HomePage.homeSubmitButton)

        await expect(browser).toHaveUrl(expect.stringContaining('contactList'));
        await reporter.addLog('Login Successfully');

        const lastContactName = `${await herokuObjUtil.getObjectText(HerokuAppObj.lastTableData)}`

        await reporter.addLog('Step 5: Click The Last Contact Name in The Table');
        await herokuObjUtil.clickObject(HerokuAppObj.lastTableData);

        await expect(browser).toHaveUrl(expect.stringContaining('contactDetails'));
        await herokuObjUtil.clickObject(HerokuAppObj.deleteContactButton);

        await browser.acceptAlert()

        await expect(browser).toHaveUrl(expect.stringContaining('contactList'));
        await expect(HerokuAppObj.lastTableData).not.toHaveText(`${lastContactName}`);
        await reporter.addLog('Deleted Successfully');
    })
    it('Heroku App Export Contacts on File_TC006', async () => {
        await reporter.addLog('Step 1: Navigate to Herokuapp Website');
        await HomePage.navigate();

        await reporter.addLog('Step 2: User Fill Email Field');
        await herokuObjUtil.setObjectValue(HomePage.homeEmailField, "test_20241024133525@test.com");

        await reporter.addLog('Step 3: User Fill Password Field');
        await herokuObjUtil.setObjectValue(HomePage.homePasswordField, "SamplePassword");

        await reporter.addLog('Step 4: Click Submit Button');
        await herokuObjUtil.clickObject(HomePage.homeSubmitButton)

        await expect(browser).toHaveUrl(expect.stringContaining('contactList'));
        await reporter.addLog('Login Successfully');

        await file.createTextFile(`${folder}/TC006_RESULT`, 'TC_0006_Result');

        await browser.pause(3000)
        const tableRows = await $$('/html/body/div/div/table/tr');

        let tableData = [];
        for await (const tableRow of tableRows) {
            const tableDatas = await tableRow.$$('td')
            let rowData = [];
            for (let i = 1; i < tableDatas.length; i++) {
                const text = await herokuObjUtil.getObjectText(tableDatas[i]);
                rowData.push(text.trim());
            }

            if (rowData.length > 0) {
                tableData.push('\n' + rowData.join('\n'));
            }
        }
        await file.appendTextFile(`${folder}/TC006_RESULT`, tableData.join('\n'));
        expect(fs.existsSync(`${folder}/TC006_RESULT.txt`)).toBe(true);
    })
})