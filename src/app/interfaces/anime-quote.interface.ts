export interface Anime {
  id: number;
  name: string;
}

export interface Character {
  id: number;
  name: string;
}

export interface AnimeQuote {
  content: string;
  anime: Anime;
  character: Character;
}

export interface AnimeQuoteInterface {
  anime: Anime;
  character: Character;
  id: number;
  quote: string;
}
