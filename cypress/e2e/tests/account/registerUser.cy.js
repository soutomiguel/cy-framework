import { CommonPageHelper } from "../../pages/common-page/common-page.helper"
import { RegisterHelper } from "../../pages/register/register.helper"

describe('Check register new user', ()=> {
    it('Insert form data', ()=>{
        let firstName = RegisterHelper.testData.firstName
        String(firstName)


        CommonPageHelper.navigateToTheApp()
        RegisterHelper.clickOnRegisterButton()
        RegisterHelper.insertFirstName('test')
        RegisterHelper.insertLastName('test')
    })
})