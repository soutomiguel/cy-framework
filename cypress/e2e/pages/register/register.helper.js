import { CommonPageHelper } from "../common-page/common-page.helper";
import { RegisterElements } from "./register.elements";

export class RegisterHelper{

    static clickOnRegisterButton(){
        CommonPageHelper.clickOnRegisterButton()
    }

    static fillFirstName(username){
        RegisterElements.fillFirstName.type(username)
    }
}