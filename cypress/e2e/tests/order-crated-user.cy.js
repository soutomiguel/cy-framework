import { CommonPageHelper } from "../pages/common-page/common-page.helper"

describe('Order', ()=> {
    it('Place order with created user', ()=>{
        CommonPageHelper.navigateToTheApp()
        CommonPageHelper.focusOnMyAccountButton()
        CommonPageHelper.clickOnRegisterButton()
    })
})