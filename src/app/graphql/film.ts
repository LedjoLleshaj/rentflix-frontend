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
        film_id
        title
        description
        release_year
        language_id
        language {
          language_id
        }
        rental_duration
        rental_rate
        length
        replacement_cost
        rating
        category {
          category_id
        }
        actors {
          actor_id
          first_name
          last_name
        }
        availableStores {
          address_id
          address {
            address
            address2
            city_id
            city {
              city
              country_id
              country {
                country
                country_id
              }
            }
          }
          manager_staff_id
          store_id
        }
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
