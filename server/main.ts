import * as express from 'express';
import * as graphqlHTTP from 'express-graphql'
import {addMockFunctionsToSchema, makeExecutableSchema} from 'graphql-tools'
import {mocks} from "./graphql-mocks";
import {typeDefs} from "./graphql-schema";

const schema = makeExecutableSchema({typeDefs});
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