import {data} from "../fixtures/data.json";
import {homePage} from "../pageObjects/homePage";
import {loginPage} from "../pageObjects/loginPage";
import {registerPage} from "../pageObjects/registerPage";

beforeEach(function () {
    cy.visit(Cypress.env('url'))
})

after(function () {
    cy.log('Tests Execution is Finished!')
    cy.clearAllSessionStorage()
    cy.clearAllLocalStorage()
    cy.clearAllCookies()
})

describe('Register Test Cases', function () {

    it(['SmokeTests', 'Register'], 'Register as Costumer', function () {

        cy.xpath("//input[@id='username']").type('employer@test.com');
        cy.contains('Continue').click();
        cy.url().should('include', '/password');
        cy.xpath("//input[@id='password']").type('test1234@');
        cy.contains('Continue').click({ force: true });

    })

    it(['SmokeTests', 'Login'], 'Register as Supplier', function () {

        //Action
        homePage.clickRegisterButton()
        registerPage.enterName(data.supplier.name)
        registerPage.enterEmail(data.supplier.email)
        registerPage.enterPassword(data.supplier.password)
        registerPage.enterConfirmPassword(data.supplier.password)
        registerPage.clickSupplierCheckbox()
        registerPage.enterSupplierName(data.supplier.name)
        registerPage.enterSupplierAddress(data.supplier.address)
        registerPage.enterSupplierDescription(data.supplier.description)
        registerPage.clickRegister()


        //Assert
        //Intercept login request
        cy.intercept(Cypress.env('api') + 'api/register').as('register')
        registerPage.checkConfirmationPopUp()

        cy.wait('@register').then((interception) => {
            // Access the intercepted request and response
            const {response} = interception;

            // Assert the status code is 201
            expect(response.statusCode).to.eq(201);
        });

    })

    it(['SmokeTests', 'Login'], 'Login as Costumer', function () {

        //Action
        homePage.clickLoginButton()
        loginPage.enterEmail(data.customer.email)
        loginPage.enterPassword(data.customer.password)
        loginPage.clickLoginButton()


        //Assert
        //Intercept login request
        cy.intercept(Cypress.env('api') + 'api/login').as('login')

        cy.wait('@login').then((interception) => {
            // Access the intercepted request and response
            const { response } = interception;

            // Assert the status code is 201
            expect(response.statusCode).to.eq(201);
        });

        //Logout
        loginPage.clickLogoutButton()

    })

    it(['SmokeTests', 'Login'], 'Login as Supplier', function () {

        //Action
        homePage.clickLoginButton()
        loginPage.enterEmail(data.supplier.email)
        loginPage.enterPassword(data.supplier.password)
        loginPage.clickLoginButton()


        //Assert
        //Intercept login request
        cy.intercept(Cypress.env('api') + 'api/login').as('login')

        cy.wait('@login').then((interception) => {
            // Access the intercepted request and response
            const { response } = interception;

            // Assert the status code is 201
            expect(response.statusCode).to.eq(201);
        });

        //Logout
        loginPage.clickLogoutButton()

    })
})
