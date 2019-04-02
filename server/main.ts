import * as express from 'express';
import * as graphqlHTTP from 'express-graphql'
import {addMockFunctionsToSchema, makeExecutableSchema, MockList} from 'graphql-tools'
import * as faker from 'faker';

// Construct a schema, using GraphQL schema language
var typeDefs = `
  type Developer {
    firstName: String
    lastName: String
    age: Int
    lovesAngular : Boolean
    locationInfo : Location
  } 
  
  type Location {
    address: String
    city: String
    country: String
    postalCode : Int
  }   
    
  type Query {
    developers: DeveloperQuery
  }
  
  type DeveloperQuery {
  list: [Developer!]!
  single(developerId: Int): Developer!
  }

  type MutationResult {
    successful: Boolean
  }
  
  input DeveloperInput {
    firstName: String
    lastName: String
    age: Int
    lovesAngular : Boolean
    locationInfo : LocationInput
  } 
  
  input LocationInput {
    address: String
    city: String
    country: String
    postalCode : Int
  }  
  
  type Mutation {
    addNewDeveloper(input: DeveloperInput!): MutationResult!
    editDeveloper(input: DeveloperInput): MutationResult!
    deleteDeveloper(input: Int): MutationResult!
  }
`;

const schema = makeExecutableSchema({typeDefs});

const mocks = {
    Developer: () => ({
        firstName: () => faker.name.firstName(),
        lastName: () => faker.name.firstName(),
        age: () => faker.random.number(100)
    }),
    Query: () => ({
        developers: () => ({
            list: () => new MockList([100,300])
        }),
    })
};

addMockFunctionsToSchema({
    schema,
    mocks
})

var app = express();
app.use('/graphql', graphqlHTTP(() => ({
    schema: schema,
    graphiql: true,
})));

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');