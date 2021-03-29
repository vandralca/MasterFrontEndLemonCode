import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const [searchCriteria, setSearchCriteria] = React.useState<string>('');
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const {
    characterCollection,
    loadCharacterCollection,
    totalPages,
  } = useCharacterCollection();
  const history = useHistory();

  React.useEffect(() => {
    loadCharacterCollection(currentPage, searchCriteria);
  }, []);

  const loadNewPage = (newPage: number, searchCriteria: string) => {
    setCurrentPage(newPage);
    setSearchCriteria(searchCriteria);
    loadCharacterCollection(newPage, searchCriteria).then(result => {
      if (newPage > result.pages) {
        setCurrentPage(result.pages);
      }
    });
  };

  const handleOpenDetails = (id: string) => {
    history.push(linkRoutes.editCharacter(id));
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      searchCriteria={searchCriteria}
      currentPage={currentPage}
      totalPages={totalPages}
      onOpen={handleOpenDetails}
      onFilteredPageSelected={loadNewPage}
    />
  );
};
