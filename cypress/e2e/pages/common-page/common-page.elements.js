export class CommonPageElements{
    static get topMenu(){
        return {
            get myAccount(){
                return cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link')
            },

            get register(){
                return cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link')
            },
        }
    }
}