export class CommonPageElements{
    static get navbar(){
        return {
            get signUp(){
                return cy.get('#signin2')
            },
            get SignIn(){
                return cy.get('#login2')
            },
            get cart(){
                return
            },
            get nameOfUser(){
                return cy.get('#nameofuser')
            }
        }
    }
}