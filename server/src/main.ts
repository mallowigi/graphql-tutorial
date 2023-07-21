import { ApolloServer } from '@apollo/server';
import { typeDefs } from './schema';
import { startStandaloneServer } from '@apollo/server/standalone';

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs });
  let { url } = await startStandaloneServer(server);
  console.log(`🚀 Server ready at ${url}`);
}

startApolloServer();