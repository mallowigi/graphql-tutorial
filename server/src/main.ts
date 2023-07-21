import { ApolloServer } from '@apollo/server';
import { typeDefs } from './schema';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from './resolvers';
import { TrackAPI } from './datasources/track-api';

async function startApolloServer() {
  const server = new ApolloServer({
    resolvers,
    typeDefs,
  });
  let { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server;
      return ({
        dataSources: {
          trackAPI: new TrackAPI({ cache }),
        },
      });
    },
  });
  console.log(`🚀 Server ready at ${url}`);
}

startApolloServer();