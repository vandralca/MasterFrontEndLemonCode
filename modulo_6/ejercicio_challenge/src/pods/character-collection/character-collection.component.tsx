import * as React from 'react';
import Button from '@material-ui/core/Button';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card/character-card.component';
import * as classes from './character-collection.styles';
import { Pager } from './components/pager/pager.component';
import { LookUp } from './components/look-up/look-up';

interface Props {
  characterCollection: CharacterEntityVm[];
  searchCriteria: string;
  currentPage: number;
  totalPages: number;
  onOpen: (id: string) => void;
  onFilteredPageSelected: (newPage: number, searchCriteria: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const {
    characterCollection,
    searchCriteria,
    currentPage,
    totalPages,
    onOpen,
    onFilteredPageSelected,
  } = props;

  return (
    <div>
      <LookUp
        onSearch={(newFilter: string) => onFilteredPageSelected(1, newFilter)}
        currentFilter={searchCriteria}
      />
      <Pager
        onPageSelected={(page: number) => onFilteredPageSelected(page, searchCriteria)}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      <div className={classes.root}>
        {/* <Button variant="contained" color="primary" onClick={onCreateCharacter}>
        Add character
      </Button> */}

        <ul className={classes.list}>
          {characterCollection.map((character) => (
            <li key={character.id}>
              <CharacterCard character={character} onOpen={onOpen} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
