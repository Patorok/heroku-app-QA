export default new class HerokuAppObj{
    // Contact List Page Elements
    get addNewContactButton() { return $('//button[@id="add-contact"]') };
    get newTableData() { return $('//table//tr[1]//td[2]') }
    get lastTableData() { return $('//table/tr[last()]/td[2]') }

    // Add Contact Page Elements
    get addContactFirstName() { return $('//input[@id="firstName"]') };
    get addContactLastName() { return $('//input[@id="lastName"]') };
    get addContactBirthdate() { return $('//input[@id="birthdate"]') };
    get addContactEmail() { return $('//input[@id="email"]') };
    get addContactPhone() { return $('//input[@id="phone"]') };
    get addContactAddress1() { return $('//input[@id="street1"]') };
    get addContactAddress2() { return $('//input[@id="street2"]') };
    get addContactCity() { return $('//input[@id="city"]') };
    get addContactProvince() { return $('//input[@id="stateProvince"]') };
    get addContactPostal() { return $('//input[@id="postalCode"]') };
    get addContactCountry() { return $('//input[@id="country"]') };
    get addContactSubmitBtn() { return $('//button[@id="submit"]') };

    // Contact Detail Page Elements
    get editContactButton() { return $('//button[@id="edit-contact"]') };
    get deleteContactButton() { return $('//button[@id="delete"]') };
    get spanPostalCode() { return $('//*[@id="postalCode"]') };
}