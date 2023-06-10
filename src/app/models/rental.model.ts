import { gql } from 'apollo-angular';

enum Sort {
  asc = 'asc',
  desc = 'desc',
}

export interface Rent {
  rental_date: number;
  rental_period: number;
  return_date: number;
  rental_id: number;
  inventory: {
    film: {
      title: string;
    };
    store: {
      address: {
        address: string;
        address2: string;
      };
    };
  };
  payment: {
    amount: number;
    payment_date: number;
  };
}

export interface GetRentalFilterInput {
  page: number;
  itemsPerPage: number;
  orderBy: string;
  sort: string;
}

export interface GetRentalAPI {
  getRentals: {
    rentals: Rent[];
    total: number;
  };
}

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  rental_stats: RentalStatistics;
}

export interface RentalStatistics {
  current_rentals: number;
  total_rentals: number;
  total_amount: number;
  most_frequent_category: Category;
}

export interface Category {
  category_id: number;
  name: string;
  last_update: string;
}

export const GET_RENTS_OF_COSTUMER = gql`
  query GetRentals($filter: GetRentalFilterInput) {
    getRentals(filter: $filter) {
      total
      rentals {
        rental_date
        rental_period
        return_date
        rental_id
        inventory {
          film {
            title
          }
          store {
            address {
              address
              address2
            }
          }
        }
        payment {
          amount
          payment_date
        }
      }
      total
    }
  }
`;
