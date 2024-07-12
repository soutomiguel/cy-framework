import { CommonPageConstants } from "./common-page.constants";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageHelper{
    static navigateToTheApp(){
        cy.visit(CommonPageConstants.appUrl)
    }
    static clickOnSignUp(){
        CommonPageElements.navbar.signUp.click()
    }
    static clickOnSignIn(){
        CommonPageElements.navbar.SignIn.click()
    }
    static clickOnCart(){
        CommonPageElements.navbar.cart.click()
    }
    static verifyNameOfUser(username){
        CommonPageElements.navbar.nameOfUser.should($element => {
            expect($element).to.have.text(`Welcome ${username}`)
        })
    }
}