export class CommonPageElements{
    static get Menu(){
        return {
            get register(){
                return cy.get('#loginPanel > :nth-child(3) > a')
            },
        }
    }
}