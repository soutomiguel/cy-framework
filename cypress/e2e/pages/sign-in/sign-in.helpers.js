import { SignInElements } from "./sign-in.elements";

export class SignInHelpers{
    static typeUserName(username){
        SignInElements.username.type(username)
    }
    static typePassword(password){
        SignInElements.password.type(password)
    }
    static clickOnSignInButton(){
        SignInElements.loginButton.click()
    }
}