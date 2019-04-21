import {MockList} from "graphql-tools";
import * as faker from 'faker';

export const mocks = {
    Character: () => ({
        firstName: () => faker.name.firstName(),
        lastName: () => selectFamilyName(),
        age: () => faker.random.number(100)
    }),
    Location: () => ({
        address: () => faker.address.streetName(),
        city: () => faker.address.city(),
        country: () => faker.address.country(),
        postalCode: () => faker.random.number(100)
    }),
    Dragon: () => ({
        name: () => selectDragonName(),
        kills: () => faker.random.number(),
    }),
    MutationResult: () => ({
        successful: () => true
    }),
    Query: () => ({
        characters: () => new MockList([100,300]),
        dragons: () => new MockList(3),
    })
};

export function selectFamilyName() {
    let families = ['Targaryen','Stark ','Lannister','Arryn', 'Tully','Greyjoy', 'Baratheon', 'Tyrell'];
    let randomNumber = Math.floor(Math.random()*families.length);
    return families[randomNumber];
}

export function selectDragonName() {
    let families = ['Drogon','Viserion','Rhaegal'];
    let randomNumber = Math.floor(Math.random()*families.length);
    return families[randomNumber];
}