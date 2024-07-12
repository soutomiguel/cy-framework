export class SignInElements{
    static get username(){
        return cy.get('#loginusername')
    }
    static get password(){
        return cy.get('#loginpassword')
    }
    static get loginButton(){
        return cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
    }
}