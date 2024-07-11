import { CommonConstants, CommonPageConstants } from "./common-page.constants";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageHelper{
    static navigateToTheApp(){
        cy.visit(CommonPageConstants.appUrl)
    }
    static clickOnSignUp(){
        CommonPageElements.navbar.signUp.click()
    }
    static clickOnSignIn(){
        CommonPageElements.navbar.signIn.click()
    }
    static clickOnCart(){
        CommonPageElements.navbar.cart.click()
    }
}