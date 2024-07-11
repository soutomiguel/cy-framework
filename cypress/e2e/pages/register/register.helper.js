import { CommonPageHelper } from "../common-page/common-page.helper";
import { RegisterElements } from "./register.elements";
import { faker } from '@faker-js/faker';

export class RegisterHelper{
    static get testData(){
        return {
            firstName: faker.person.firstName,
            lastName: faker.person.lastName
        }
    }
    static clickOnRegisterButton(){
        CommonPageHelper.clickOnRegisterButton()
    }
    static insertFirstName(firstname){
        RegisterElements.elements.firstName.type(firstname)
    }
    static insertLastName(lastname){
        RegisterElements.elements.lastname.type(lastname)
    }
}