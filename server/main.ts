import * as express from 'express';
import * as graphqlHTTP from 'express-graphql'
import {addMockFunctionsToSchema, makeExecutableSchema} from 'graphql-tools'
import {mocks} from "./graphql-mocks";
import {typeDefs} from "./graphql-schema";

/**Step 1 : Generating our schema!**/
const schema = makeExecutableSchema({typeDefs});

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
})));

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');