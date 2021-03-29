import { Character, Comment } from './character.api-model';
import Axios from 'axios';
import { graphqlClientLocal, graphqlClient } from 'core/api/graphql.client';
import { gql } from 'graphql-request';

interface GetComment {
  commentByCharacterId: Comment;
}

interface GetResults {
  results: Character[];
}

interface GetCharacter {
  character: Character;
}

const commentListUrl = '/api/comments';

export const getCharacter = async (id: string): Promise<Character> => {
  // const response = await Axios.get(
  //   `https://rickandmortyapi.com/api/character/${id}`
  // );

  // return response.data;
  const query = gql`
    query {
      character(id: "${id}")
      {
        id
        name
        status
        species
        type
        gender
        origin
        {
          name
        }
        location
        {
          name
        }
        image
        episode
        {
          name
        }
        created
      }
    }
  `;
  const { character } = await graphqlClient.request<GetCharacter>(query);
  return character;
};

export const getComment = async (character_id: string): Promise<Comment> => {
  //const response = await Axios.get<Comment[]>(`${commentListUrl}?character_id=${character_id}`);

  //return response.data[0];
  const query = gql`
    query {
      commentByCharacterId(character_id: "${character_id}")
      {
        id
        character_id
        author
        text
      }
    }
  `;
  const { commentByCharacterId } = await graphqlClientLocal.request<GetComment>(
    query
  );
  return commentByCharacterId;
};

interface SaveCommentResponse {
  saveComment: boolean;
}

export const saveComment = async (comment: Comment): Promise<boolean> => {
  // if (comment.id) {
  //   await Axios.put<Comment>(`${commentListUrl}/${comment.id}`, comment);
  // } else {
  //   await Axios.post<Comment>(commentListUrl, comment);
  // }
  // return true;

  const query = gql`
    mutation($comment: CommentInput!)
    {
      saveComment(comment: $comment)
    }
  `;
  const { saveComment } = await graphqlClientLocal.request<SaveCommentResponse>(
    query,
    { comment }
  );
  return saveComment;
};
