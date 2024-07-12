export class homeElements{
    static productLink(productName){
        return cy.contains('a', productName)
    }
}