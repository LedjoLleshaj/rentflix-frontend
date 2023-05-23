import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];


// The GraphQL schema
const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;

const resolvers = {
    Query:{
        books: () => books,
    }
}

// Apollo server instance
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Passing an ApolloServer instance
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);