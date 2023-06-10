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
  availableStores?: AvailableStore[];
}

export class AvailableStore {
  store_id: string;
  address: {
    address: string;
    city: {
      city: string;
      country: {
        country: string;
      };
    };
  };
}

export class RentalRequest {
  film_id: number;
  store_id: number;
  rental_date: Date;

  constructor(film_id: string, store_id: string, rental_date: Date) {
    this.film_id = parseInt(film_id);
    this.store_id = parseInt(store_id);
    this.rental_date = rental_date;
  }
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



export const rentFilm = gql`
  mutation rentFilm($data: RentFilmInput!) {
    rentFilm(data: $data) {
      rental_id
      rental_date
      inventory {
        film {
          title
        }
      }
    }
  }
`;
