import {MockList} from "graphql-tools";
import * as faker from 'faker';

export const mocks = {
    Developer: () => ({
        firstName: () => faker.name.firstName(),
        lastName: () => faker.name.firstName(),
        age: () => faker.random.number(100)
    }),
    Location: () => ({
        address: () => faker.address.streetName(),
        city: () => faker.address.city(),
        country: () => faker.address.country(),
        postalCode: () => faker.random.number(100)
    }),
    MutationResult: () => ({
        successful: () => true
    }),
    Query: () => ({
        getDevelopers: () => new MockList([100,300]),
    })
};