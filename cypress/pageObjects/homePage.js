class homePage {
    elements = {
        //Click Register Button
        registerButton: () => cy.xpath("//a[contains(text(),'Register')]"),
        //Click Register Button
        loginButton: () => cy.xpath("//a[contains(text(),'Login')]"),
    }

    clickRegisterButton() {
        this.elements.registerButton().click();
    }

    clickLoginButton() {
        this.elements.loginButton().click();
    }
}

module.exports = {
    homePage: new homePage(),
};