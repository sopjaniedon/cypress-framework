class registerPage {
    elements = {
        //Click Register Button
        registerButton: () => cy.xpath("//button[contains(text(),'Register')]"),
        //Check Confirmation
        checkConfirmation: () => cy.xpath("//p[contains(text(),'Succesful')]"),
        //Enter Name
        name: () => cy.xpath('//label[contains(text(),\'Name\')]/../input'),
        //Enter Email
        email: () => cy.xpath('//label[contains(text(),\'Email\')]/../input'),
        //Enter Password
        password: () => cy.xpath('(//label[contains(text(),\'Password\')]/../input)[1]'),
        //Enter Confirm Password
        confirmPassword: () => cy.xpath('//label[contains(text(),\'Password confirmation\')]/../input'),
        //Click Are you a supplier checkbox
        SupplierCheckbox: () => cy.xpath("//label[contains(text(),'Are you a supplier?')]"),
        //Enter Supplier Name
        supplierName: () => cy.xpath('//label[contains(text(),\'Supplier name\')]/../input'),
        //Enter Supplier Address
        supplierAddress: () => cy.xpath('//label[contains(text(),\'Supplier address\')]/../input'),
        //Enter Supplier Description
        supplierDescription: () => cy.xpath('//label[contains(text(),\'Supplier description\')]/../input'),

    }

    clickRegister() {
        this.elements.registerButton().click();
    }

    clickSupplierCheckbox() {
        this.elements.SupplierCheckbox().click();
    }

    checkConfirmationPopUp() {
        this.elements.checkConfirmation().should('exist');
    }

    enterEmail(email) {
        this.elements.email().type(email)
    }

    enterPassword(password) {
        this.elements.password().type(password)
    }

    enterConfirmPassword(confirmPassword) {
        this.elements.confirmPassword().type(confirmPassword)
    }

    enterName(name) {
        this.elements.name().type(name)
    }

    enterSupplierName(supplierName) {
        this.elements.supplierName().type(supplierName)
    }

    enterSupplierAddress(address) {
        this.elements.supplierAddress().type(address)
    }

    enterSupplierDescription(description) {
        this.elements.supplierDescription().type(description)
    }
}


module.exports = {
    registerPage: new registerPage(),
};