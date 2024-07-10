import { CommonPageHelper } from "../pages/common-page/common-page.helper"
import { RegisterHelper } from "../pages/register/register.helper"

describe('Check register new user', ()=> {
    it('Fill register form', ()=>{
        CommonPageHelper.navigateToTheApp()
        RegisterHelper.clickOnRegisterButton()
        RegisterHelper.fillFirstName()
    })
})