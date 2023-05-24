import * as path from 'path';

const directory: string = path.resolve();
console.log(directory);
import { ApolloServer } from '@apollo/server';
import { readFileSync} from "fs";
import {startStandaloneServer} from "@apollo/server/standalone";
import resolvers from "./src/resolvers";




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
// startApolloServer();



