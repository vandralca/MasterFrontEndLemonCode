import crypto from 'crypto';
import {
  createDefaultComment,
  mockComments,
} from './mock-data';
import { Comment, CommentEdit } from './models';

let comments = [...mockComments];

export const getComment = async (id: String): Promise<Comment> =>
  comments.find((c) => c.id === id);

export const getCommentByCharacterId = async (character_id: String): Promise<Comment> =>
  comments.find((c) => c.character_id === character_id);

export const insertComment = async (commentEdit: CommentEdit) => {
  const newId = crypto.randomBytes(16).toString('hex');
  comments = [
    ...comments,
    {
      ...createDefaultComment(),
      ...commentEdit,
      id: newId,
    },
  ];
  return newId;
};

export const updateComment = async (
  commentEdit: CommentEdit
): Promise<boolean> => {
  comments = comments.map((c) =>
    c.id === commentEdit.id
      ? {
          ...c,
          ...commentEdit,
        }
      : c
  );

  return true;
};
