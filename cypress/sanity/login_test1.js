import LoginPage from "./PageObject/LoginPage.js";
import VehicleTreePage from "./PageObject/VehicleTreePage.js";

describe("Verify test cases in Task 1", function () {
    
    const login_page = new LoginPage();
    
    beforeEach(function()
    {
        cy.visit("https://uat.pinpointcomms.com.au/WebAvm4/Authentication/Account/Login");

    })
    
    //TEST 
    
    // it("Verify version number in Login page", function () {
    //     login_page.verifyVersion('1.24.0.0')  
    // });
  
    // it("Verify user can Login to the application using valid Username and Password", function () {
    //     login_page.getUsernameField().type('peter')
    //     login_page.getNextButton().click()
    //     login_page.getPasswordField().type('peterM1234',{force: true})
    //     login_page.getLoginButton().click()
    //     login_page.getHideButton().click()
    //     cy.compareElementTextWith(login_page.getWelcomeText(), 'peter');
    // });
  
    // it("Verify user can see the Vehicle tree in left hand side menu", function () {

    // });

    // it("Verify user can see the Vehicle tree in left hand side menu", function () {

    // });

  });
