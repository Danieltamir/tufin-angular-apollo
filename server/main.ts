import * as express from 'express';
import * as graphqlHTTP from 'express-graphql'
import * as cors from 'cors'
import {addMockFunctionsToSchema, makeExecutableSchema} from 'graphql-tools'
import {mocks} from "./graphql-mocks";
import {schemaTypes} from "./graphql-schema";

/**Step 1 : Generating our schema!**/
const schema = makeExecutableSchema({typeDefs: schemaTypes});

/**Step 2 : Adding mocks to the schema!**/
addMockFunctionsToSchema({
    schema,
    mocks
});

var app = express();

/**Step 3 : Running the server with GraphiQL!!**/
app.use('/graphql', graphqlHTTP(() => ({
    schema: schema,
    graphiql: true,
    cors
})));

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');