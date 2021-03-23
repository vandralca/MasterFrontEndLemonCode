import { CharacterEntityApi } from './character-collection.api-model';
import Axios from 'axios';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const response = await Axios.get('https://rickandmortyapi.com/api/character');

  return response.data.results;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  //characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
