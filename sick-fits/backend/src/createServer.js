const { GraphQLServer } = require('graphaql-yoga');
const { Mutation } = require('./resolvers/Mutation');
const { Query } = require('./resolvers/Query');

// create graphql yoga server
function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation,
      Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({ ...req, db })
  });
}

module.exports = createServer;
