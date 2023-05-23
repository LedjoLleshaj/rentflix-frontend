import express, { Express, Request, Response} from "express";
import {GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString} from "graphql";
import {graphqlHTTP} from "express-graphql";
import users from "./src/queries/users";
import userModel from "./src/models/user";

const query = new GraphQLObjectType({
    name: 'Query',
    fields() {
        return {
            hello: {
                type: GraphQLString,
                resolve() {
                    return 'world';
                }
            }
        }
    }
})

const schema =new GraphQLSchema({
    query
});



// The root provides a resolver function for each API endpoint
const root = {
    user: () => {
        return [{
            id: 1,
        }]
    },
}


const app : Express = express()

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
)
app.listen(4000)
console.log("Running a GraphQL API server at http://localhost:4000/graphql")