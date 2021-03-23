import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  ...character,
  id: character.id,
  name: character.name,
  status: character.status,
  image: character.image,
  url: character.url,
  comment: null,
});

export const mapCharacterFromVmToApi = (
  character: viewModel.Character
): apiModel.Character =>
  (({
    ...character,
  } as unknown) as apiModel.Character);

export const mapCommentFromApiToVm = (
  comment: apiModel.Comment
): viewModel.Comment =>
  (({
    ...comment,
  } as unknown) as viewModel.Comment);

export const mapCommentFromVmToApi = (
  comment: viewModel.Comment
): apiModel.Comment =>
  (({
    ...comment,
  } as unknown) as apiModel.Comment);
