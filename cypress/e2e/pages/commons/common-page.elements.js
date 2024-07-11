export class CommonPageElements{
    static get navbar(){
        return {
            get signUp(){
                return cy.get('a[data-target="#signInModal"]')
            },
            get SignIn(){
                return cy.get('a[data-target="#logInModal"]')
            },
            get cart(){
                return cy.get('a#cartur')
            }
        }
    }
}