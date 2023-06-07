import { gql } from 'apollo-angular';

export interface FilmModel {
  title: string;
  release_year?: number;
  rating?: string;
  category?: string;
  language?: string;
  rental_rate: number;
}

export interface FilmListModel {
  getFilms: {
    films: FilmModel[];
    total: number;
  };
}

export interface GetFilmsFilterInput {
  title: string;
  categories: number[];
  page: number;
  filmPerPage: number;
  orderBy: string;
  sort: string;
}

export const GET_FILMS_QUERY = gql`
  query GetFilms($filter: GetFilmsFilterInput) {
    getFilms(filter: $filter) {
      films {
        title
        release_year
        rating
        category
        language
        rental_rate
      }
      total
    }
  }
`;
export const FILMLIST_QUERY = GET_FILMS_QUERY;

export interface GetCategoriesModel {
  getCategories: {
    categories: string[];
  };
}

export const GET_CATEGORIES_QUERY = gql`
  query GetCategories {
    getCategories {
      name
    }
  }
`;
