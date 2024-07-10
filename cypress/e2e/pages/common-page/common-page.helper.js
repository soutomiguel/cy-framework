import { CommonConstants } from "./common-page.constants";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageHelper{
    static navigateToTheApp(){
        cy.visit(CommonConstants.appUrl)
    }

    static focusOnMyAccountButton(){
        CommonPageElements.topMenu.myAccount.focus()
    }

    static clickOnRegisterButton(){
        CommonPageElements.topMenu.register.click()
    }
}