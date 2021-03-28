export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
  comment: Comment;
}

export interface Location {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface Episode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface Comment {
  id: string;
  character_id: string;
  author: string;
  text: string;
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  origin: null,
  location: null,
  image: '',
  episode: [],
  url: '',
  created: '',
  comment: null,
});

export const createEmptyComment = (character_id: string): Comment => ({
  id: '',
  character_id: character_id,
  author: 'Anónimo',
  text: '',
});
