import { CharacterEntityApi } from './character-collection.api-model';
import { graphqlClient } from 'core/api/graphql.client';
import { gql } from 'graphql-request';

interface GetResults {
  results: CharacterEntityApi[];
}

interface GetCharacters {
  characters: GetResults;
}

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  // const response = await Axios.get('https://rickandmortyapi.com/api/character');

  // return response.data.results;
  const query = gql`
    query {
      characters(page: 1, filter: {})
      {
        results
        {
          id
          name
          status
          image
        }
      }
    }
  `;
  const { characters } = await graphqlClient.request<GetCharacters>(query);
  return characters.results;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  //characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
