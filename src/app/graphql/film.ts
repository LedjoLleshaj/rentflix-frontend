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

export const GET_FILMS_QUERY = gql`
  input GetFilmsFilterInput {
    title: String
    categories: [Int!]
    page: Int
    filmPerPage: Int
    orderBy: String
    sort: Sort
  }

  query GetFilms($filter: GetFilmsFilterInput) {
    getFilms(filter: $filter) {
      films {
        title
        rating
        category
        language
      }
    }
  }
`;
export const FILMLIST_QUERY = GET_FILMS_QUERY;
