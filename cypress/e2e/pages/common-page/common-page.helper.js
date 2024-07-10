import { CommonConstants } from "./common-page.constants";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageHelper{
    static navigateToTheApp(){
        cy.visit(CommonConstants.appUrl)
    }
    
    static clickOnRegisterButton(){
        CommonPageElements.Menu.register.click()
    }
}