import { faker } from '@faker-js/faker'

export default function createUser() {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),

    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),

    company: faker.company.name(),

    address: faker.location.streetAddress(),
    country: 'Canada',
    state: faker.location.state(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode(),

    mobileNumber: faker.phone.number()
  }
}
