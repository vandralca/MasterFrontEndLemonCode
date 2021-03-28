export interface Comment {
  id: string;
  character_id: string;
  author: string;
  text: string;
}

export interface CommentEdit {
  id: string;
  text: string;
}