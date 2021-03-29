import { Router } from 'express';
import {
  CommentEdit,
  getComment,
  updateComment,
  insertComment,
} from '../db';

export const commentApi = Router();

commentApi
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const comment = await getComment(id);
    res.send(comment);
  })
  .post('/', async (req, res) => {
    const commentEdit: CommentEdit = req.body;
    const id = await insertComment(commentEdit);
    res.send(id);
  })
  .patch('/:id', async (req, res) => {
    const commentEdit: CommentEdit = req.body;
    await updateComment(commentEdit);
    res.sendStatus(200);
  });
