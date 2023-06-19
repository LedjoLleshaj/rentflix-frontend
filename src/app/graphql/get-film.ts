import { gql } from "apollo-angular";

export const GET_FILM_QUERY = gql`
  query ($filmId: ID!) {
    getFilm(film_id: $filmId) {
      actors {
        first_name
        last_name
      }
      availableStores {
        address {
          address
          city {
            city
            country {
              country
            }
          }
        }
        store_id
      }
      category {
        name
      }
      description
      film_id
      language {
        name
      }
      length
      rating
      release_year
      rental_duration
      rental_rate
      replacement_cost
      title
    }
  }
`;
