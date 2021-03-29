import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCollectionResponse, getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterEntityVm[]
  >([]);
  const [totalPages, setTotalPages] = React.useState<number>(0);

  const loadCharacterCollection = (page: number, searchCriteria: string): Promise<CharacterCollectionResponse> => {
    return getCharacterCollection(page, searchCriteria).then((result) => {
      setCharacterCollection(mapToCollection(result.character_collection, mapFromApiToVm));
      setTotalPages(result.pages);
      return result;
    });
  };

  return {
    characterCollection,
    loadCharacterCollection,
    totalPages,
  };
};
