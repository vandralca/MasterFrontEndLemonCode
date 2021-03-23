import { Character, Comment } from './character.api-model';
import { Lookup } from 'common/models';
import Axios from 'axios';

const commentListUrl = '/api/comments';

export const getCharacter = async (id: string): Promise<Character> => {
  const response = await Axios.get(`https://rickandmortyapi.com/api/character/${id}`);

  return response.data;
};

export const getComment = async (character_id: string): Promise<Comment> => {
  const response = await Axios.get<Comment[]>(`${commentListUrl}?character_id=${character_id}`);

  return response.data[0];
};

export const saveComment = async (comment: Comment): Promise<boolean> => {
  if (comment.id) {
    await Axios.put<Comment>(`${commentListUrl}/${comment.id}`, comment);
  } else {
    await Axios.post<Comment>(commentListUrl, comment);
  }
  return true;
};
