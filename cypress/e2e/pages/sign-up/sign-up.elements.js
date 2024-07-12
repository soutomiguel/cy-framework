export class SignUpElements{
    static get username(){
        return cy.get('#sign-username')
    }            
    static get password(){
        return cy.get('#sign-password')
    }
    static get signUpButton(){
        return cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
    }
}