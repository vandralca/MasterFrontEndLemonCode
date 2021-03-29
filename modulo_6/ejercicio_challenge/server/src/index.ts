import 'regenerator-runtime/runtime';
import express from 'express';
import path from 'path';
import { ApolloServer, gql } from 'apollo-server-express';
import { commentApi } from './api';
import { typeDefs, resolvers } from './graphql';
//import { resolvers } from 'graphql';

const PORT = 3000;
const app = express();
app.use(express.json());

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));
app.use('/api/comments', commentApi);

const graphQlServer = new ApolloServer({
  typeDefs,
  resolvers,
});
graphQlServer.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}`);
});
