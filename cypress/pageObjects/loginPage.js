class loginPage {
    elements = {
        //Click Login Button
        loginButton: () => cy.xpath("//button[contains(text(),'Login')]"),
        //Click Logout Button
        logoutButton: () => cy.xpath("//a[contains(text(),'Logout')]"),
        //Enter Email
        email: () => cy.xpath('//label[contains(text(),\'Email\')]/../input'),
        //Enter Password
        password: () => cy.xpath('//label[contains(text(),\'Password\')]/../input'),

    }

    clickLoginButton() {
        this.elements.loginButton().click();
    }

    clickLogoutButton() {
        this.elements.logoutButton().click();
    }

    enterEmail(email) {
        this.elements.email().type(email)
    }

    enterPassword(password) {
        this.elements.password().type(password)
    }

}


module.exports = {
    loginPage: new loginPage(),
};