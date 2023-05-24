import { ApolloServer } from '@apollo/server';
import { readFileSync} from "fs";
import {startStandaloneServer} from "@apollo/server/standalone";
import { resolvers } from './resolvers.js'

function startApolloServer() {
    const schema = readFileSync("src/schema.graphql");
    const server = new ApolloServer({
        typeDefs: `${schema}`,
        resolvers: resolvers
    });
    startStandaloneServer(server, {
        listen: {port: 4000}
    }).then(({ url }) => {
        console.log(`🚀  Server ready at: ${url}`);
    }).catch((err) => {
        console.error(err);
    });
}
//
startApolloServer();



