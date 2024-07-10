import { faker } from '@faker-js/faker';

export class CommonRegisterConstants{
    static get testData(){
        let password = faker.person.password
        return {
            firstName: faker.person.firstName,
            lastName: faker.person.lastName,
            address: faker.person.address,
            city: faker.person.city,
            state: faker.location.state,
            zipCode: faker.location.zipCode,
            phone: faker.person.phone,
            ssn: faker.number.int,
            username: faker.person.username,
            password: password,
            confirmPassword: password
        }
    }
}