import { ApolloServer } from '@apollo/server';
import { typeDefs } from './schema';
import { startStandaloneServer } from '@apollo/server/standalone';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { mocks } from './mocks';

async function startApolloServer() {
  const server = new ApolloServer({
    schema: addMocksToSchema(({
      schema: makeExecutableSchema({ typeDefs }),
      mocks,
    })),
  });
  let { url } = await startStandaloneServer(server);
  console.log(`🚀 Server ready at ${url}`);
}

startApolloServer();