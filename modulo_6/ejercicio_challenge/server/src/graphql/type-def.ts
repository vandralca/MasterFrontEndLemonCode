import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Comment {
    id: ID!,
    character_id: String!,
    author: String!,
    text: String!,
  }

  type Query {
      commentByCharacterId(character_id: String!): Comment
  }

  input CommentInput {
    id: ID!
    character_id: String!
    author: String!
    text: String!
  }

  type Mutation {
    saveComment(comment: CommentInput): Boolean
  }
`;
