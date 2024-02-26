import { version } from "chai"

class LoginPage {

    getVersionText()
    {
        return cy.get('#rcorners1').invoke('text')
    }

    verifyVersion(expectedVersion)
    {
        //this is one way of verifying the text of a sentence from an element is same as string. another way is provided in commands.js
        this.getVersionText().then((text)=> {
            cy.log(text)
            var value = text.split(" ")
            const currentVersion = value[1].trim()
            cy.log(currentVersion) 
            expect(currentVersion).to.eq(expectedVersion)
        })
    }

    getUsernameField()
    {
        return cy.get("#UserName")
    }
    
    getNextButton()
    {
        return cy.get("#btnLogin")
    }

    getPasswordField()
    {
        return cy.get('#Password')
    }

    getLoginButton()
    {
        return cy.get('#btnLogin')
    }

    getHideButton()
    {
        return cy.get('#btnHideAlarmPopup')
    }

    getWelcomeText()
    {
        return cy.get('#mainToolbar > .k-overflow-anchor') 
    }

}
    
export default LoginPage