import { gql } from 'apollo-angular';

export interface Film {
  film_id: string;
  title: string;
  description?: string;
  release_year?: number;
  language_id?: number;
  language?: {
    name: string;
  };
  rental_duration?: number;
  rental_rate?: number;
  length?: number;
  replacement_cost?: number;
  rating?: string;
  category?: {
    name: string;
  };
  actors?: {
    first_name: string;
    last_name: string;
  }[];
  availableStores?: {
    store_id: number;
    address: {
      address: string;
      city: {
        city: string;
        country: {
          country: string;
        };
      };
    };
  }[];
}

export interface FilmListModel {
  getFilms: {
    films: Film[];
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
        film_id
        title
        release_year
        language {
          name
        }
        rental_rate
        rating
        category {
          name
        }
      }
      total
    }
  }
`;

export interface GetCategoriesModel {
  name: string;
  category_id: number;
}

export const GET_CATEGORIES_QUERY = gql`
  query GetCategories {
    getCategories {
      name
      category_id
    }
  }
`;
