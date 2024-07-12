import { SignUpElements } from "./sign-up.elements";

export class SignUpHelper{
    static typeUsername(username){
        SignUpElements.username.type(username)
    }
    static typePassword(password){
        SignUpElements.password.type(password)
    }
    static clickOnSignUpButton(){
        SignUpElements.signUpButton.click()
    }
}