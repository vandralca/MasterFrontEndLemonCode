import { GraphQLClient } from 'graphql-request';

const urlLocal = '/graphql'
const url = 'https://rickandmortyapi.com/graphql'
export const graphqlClientLocal = new GraphQLClient(urlLocal);
export const graphqlClient = new GraphQLClient(url);
