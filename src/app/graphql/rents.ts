import { gql } from "apollo-angular";

export interface RentFilmInput {
  film_id: number;
  store_id: number;
  rental_date: string;
}

export interface RentalStats {
  current_rentals: number;
  total_rentals: number;
  total_amount: number;
  most_frequent_category: {
    name: string;
    category_id: number;
  };
}

export interface RentalStatistics {
  getUser: {
    email: string;
    first_name: string;
    last_name: string;
    rental_stats: RentalStats;
  };
}

export const getRentalsStats = gql`
  query {
    getUser {
      rental_stats {
        current_rentals
        total_rentals
        total_amount
        most_frequent_category {
          name
          category_id
        }
      }
      first_name
      last_name
      email
    }
  }
`;
