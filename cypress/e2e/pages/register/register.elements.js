export class RegisterElements{
    static get elements(){
        return {
            get firstName(){
                return cy.get('input[name="customer.firstName"]')
            },

            get lastname(){
                return cy.get('input[name="customer.lastName"]')
            },

            get address(){
                return cy.get('input[name="customer.address.street"]')
            },

            get city(){
                return cy.get('input[name="customer.address.city"]')
            },

            get state(){
                return cy.get('input[name="customer.address.state"]')
            },

            get zipCode(){
                return cy.get('input[name="customer.address.zipCode"]')
            },

            get phone(){
                return cy.get('input[name="customer.phoneNumber"]')
            },

            get ssn(){
                return cy.get('input[name="customer.ssn"]')
            },
            get username(){
                return cy.get('input[name="customer.username"]')
            },
            get password(){
                return cy.get('input[name="customer.password"]')
            },

            get repeatPassword(){
                return cy.get('input#repeatedPassword')
            },

            get registerButton(){
                return cy.get('input[value="Register"]')
            }
        }
    }
}