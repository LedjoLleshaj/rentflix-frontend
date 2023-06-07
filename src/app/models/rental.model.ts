import { gql } from 'apollo-angular';

enum Sort {
  asc = 'asc',
  desc = 'desc'
}

export interface Rent {
  rental_id: number;
  rental_date: Date;
  inventory_id: number;
  customer_id: number;
  return_date: Date;
  staff_id: number;
  last_update: Date;
}

export interface GetRentalOfCustomerFilter {
  page: number;
  filmPerPage: number;
  orderBy: string;
  sort: Sort;
}

export interface GetRentalOfCustomerApiOutput {
  getRentsOfCustomer: GetRentalOfCustomerOutput;
}

export interface GetRentalOfCustomerOutput {
  rents: Rent[];
  total: number;
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
  query getRentsOfCustomer($filter: GetRentsOfCustomerFilterInput) {
    getRentsOfCustomer(filter: $filter) {
      rents {
        title
        rental_date
        return_date
        address
        amount
      }
      total
    }
  }
`;
