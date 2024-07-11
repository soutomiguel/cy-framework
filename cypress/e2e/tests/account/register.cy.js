import { CommonPageHelper } from "../../pages/commons/common-page.helper"

describe('Register user', ()=> {
    it('Check user can login correctly', ()=>{
        CommonPageHelper.navigateToTheApp()
        CommonPageHelper.clickOnSignUp()
    })
})