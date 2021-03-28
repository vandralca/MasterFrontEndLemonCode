import { Comment, getCommentByCharacterId, updateComment, insertComment, CommentEdit } from '../db';

interface SaveCommentArgs {
  comment: CommentEdit
}

export const resolvers = {
  Query: {
    commentByCharacterId: async (parent, args): Promise<Comment> => {
      return getCommentByCharacterId(args.character_id);
    },
  },
  Mutation: {
    saveComment: async (parent, args: SaveCommentArgs): Promise<boolean> => {
      if (args.comment.id) {
        await updateComment(args.comment)
      } else {
        await insertComment(args.comment)
      }

      return true;
    },
  },
};
