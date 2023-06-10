import { gql } from 'apollo-angular';

export const GET_RENTAL_QUERY = gql`
query GetRental($rentalId: ID!) {
  getRental(rental_id: $rentalId) {
    inventory {
      film {
        title
        rental_rate
        replacement_cost
      }
      store {
        address {
          address
          city {
            city
            country {
              country
            }
          }
        }
      }
    }
    rental_date
    rental_period
    return_date
    payment {
      amount
      payment_date
    }
  }
}
`;
