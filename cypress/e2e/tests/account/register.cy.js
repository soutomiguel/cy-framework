import { CommonPageHelper } from "../../pages/commons/common-page.helper"
import { HomeConstants } from "../../pages/home/home.constants"
import { HomeHelpers } from "../../pages/home/home.helpers"
import { SignInHelpers } from "../../pages/sign-in/sign-in.helpers"
import { SignUpHelper } from "../../pages/sign-up/sign-up.helpers"

let username = '444'
let password = '444'
const productLink = HomeConstants.productTestData.productName

beforeEach(() => {
    CommonPageHelper.navigateToTheApp()
})
describe('Register user', () => {
    it('Check user can login correctly', () =>{
        CommonPageHelper.clickOnSignUp()
        SignUpHelper.typeUsername(username)
        SignUpHelper.typePassword(password)
        SignUpHelper.clickOnSignUpButton()
    })
})
describe('Sign up user', () => {
    it('Check the user is logged in correctly', () => {
        CommonPageHelper.clickOnSignIn()
        SignInHelpers.typeUserName(username)
        SignInHelpers.typePassword(password)
        SignInHelpers.clickOnSignInButton()
        CommonPageHelper.verifyNameOfUser(username)
    })
})
describe('Enter to product', () => {
    it('Check enter to product', () => {
        HomeHelpers.clickOnProduct(productLink)
    })
})