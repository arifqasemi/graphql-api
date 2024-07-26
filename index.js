// const express = require('express')
// const app = express()

// const { graphqlHTTP } = require('express-graphql')
// const graphqlResolver = require('./grapql/resolvers')
// const schema = require('./grapql/schema')
import resolvers from './grapql/resolvers.js';
import typeDefs from './grapql/schema.js';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);