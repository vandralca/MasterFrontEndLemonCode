import { Comment } from './models';

export const createDefaultComment = (): Comment => ({
  id: '',
  character_id: '',
  author: '',
  text : '',
});

export const mockComments: Comment[] = [
  {
    id: '1',
    character_id: '2',
    author: 'Vicente',
    text: 'Mi comentario',
  },
  {
    id: 'sefJ0rP',
    character_id: '1',
    author: 'Anónimo',
    text: 'Comentario para Rick actualizado',
  },
  {
    id: '8cLy-Ze',
    character_id: '7',
    author: 'Yo mismo',
    text: 'Mi comentario',
  },
  {
    id: '4JY802z',
    character_id: '13',
    author: 'Alejandro Dumas',
    text: 'Comentario para este bicho.',
  },
];
