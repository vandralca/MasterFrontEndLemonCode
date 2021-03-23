import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import Axios from 'axios';

export const getCharacter = async (id: string): Promise<Character> => {
  const response = await Axios.get(`https://rickandmortyapi.com/api/character/${id}`);

  return response.data;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
