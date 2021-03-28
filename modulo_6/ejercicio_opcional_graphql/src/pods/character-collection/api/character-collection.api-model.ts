export interface CharacterEntityApi {
    id: string;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: LocationEntityApi;
    location: LocationEntityApi;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface LocationEntityApi {
    id: string;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
}

export interface EpisodeEntityApi {
    id: string;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}
