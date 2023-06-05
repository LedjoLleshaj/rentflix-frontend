import { gql } from 'apollo-angular';

export interface FilmModel {
  title: string;
  year?: number;
  rating?: string;
  category?: string;
  language?: string;
  cost: number;
}

export interface FilmListModel {
  filmList: FilmModel[];
}

export const FILMLIST_QUERY = gql`
  query filmList {
    filmList {
      title
      year
      rating
      category
      language
      cost
    }
  }
`;
