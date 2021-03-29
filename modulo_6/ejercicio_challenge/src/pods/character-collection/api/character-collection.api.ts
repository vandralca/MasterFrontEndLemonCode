import {
  CharacterCollectionResponse,
  CharacterEntityApi,
} from './character-collection.api-model';
import { graphqlClient } from 'core/api/graphql.client';
import { gql } from 'graphql-request';

interface GetResults {
  results: CharacterEntityApi[];
  info: GetInfo;
}

interface GetInfo {
  pages: number;
}

interface GetCharacters {
  characters: GetResults;
}

export const getCharacterCollection = async (
  page: number,
  searchCriteria: string
): Promise<CharacterCollectionResponse> => {
  // const response = await Axios.get('https://rickandmortyapi.com/api/character');

  // return response.data.results;
  if (page === 0) {
    return { character_collection: [], pages: 0 };
  }

  const query = gql`
    query {
      characters(page: ${page}, filter: { name: "${searchCriteria}" })
      {
        results
        {
          id
          name
          status
          image
        }
        info {
          pages
        }
      }
    }
  `;
  try {
    const { characters } = await graphqlClient.request<GetCharacters>(query);
    return {
      character_collection: characters.results,
      pages: characters.info.pages,
    };
  } catch (e) {
    return { character_collection: [], pages: 0 };
  }
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  //characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
