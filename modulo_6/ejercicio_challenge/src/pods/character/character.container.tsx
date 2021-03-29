import React from 'react';
import { useParams } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, createEmptyComment, Character, Comment } from './character.vm';
import { mapCharacterFromApiToVm, mapCommentFromVmToApi, mapCommentFromApiToVm } from './character.mappers';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter());
  const { id } = useParams();

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    const apiCharacterComment = await api.getComment(apiCharacter.id) || createEmptyComment(id);
    const vmCharacter = mapCharacterFromApiToVm(apiCharacter);
    vmCharacter.comment = mapCommentFromApiToVm(apiCharacterComment);
    setCharacter(vmCharacter);
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  const handleSave = async (comment: Comment) => {
    const apiComment = mapCommentFromVmToApi(comment);
    const success = await api.saveComment(apiComment);
    if (success) {
      handleLoadCharacter();
    } else {
      alert('Error on save hotel');
    }
  };

  return <CharacterComponent character={character} onSaveComment={handleSave}/>;
};
