import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_RENTS_OF_COSTUMER, GetRentalFilterInput, GetRentalAPI, Rental } from '../../../models/rental.model';
import { getRentalsStats, RentalStatistics } from 'src/app/graphql/rents';
import { Subject } from 'rxjs';
import { GET_RENTAL_QUERY } from 'src/app/graphql/get-rental';

@Injectable({
  providedIn: 'root',
})
export class RentalApiService {
  constructor(private apollo: Apollo) {}

  getRentsOfCustomer(filter: GetRentalFilterInput = {} as GetRentalFilterInput) {
    let response = new Subject<GetRentalAPI>();
    this.apollo
      .query<GetRentalAPI>({
        query: GET_RENTS_OF_COSTUMER,
        variables: {
          filter: filter,
        },
      })
      .subscribe({
        next: ({ data }) => {
          response.next(data);
        },
        error: (error) => {
          console.log('Error: ', error);
          response.next(error);
        },
      });
    return response.asObservable();
  }

  getRentalsStats() {
    let response = new Subject<RentalStatistics>();

    this.apollo
      .query<RentalStatistics>({
        query: getRentalsStats,
      })
      .subscribe({
        next: ({ data }) => {
          response.next(data);
        },
        error: (error) => {
          console.log('Error: ', error);
          response.next(error);
        },
      });
    return response.asObservable();
  }

  getRental(id: string) {
    let response = new Subject<Rental>();
    this.apollo
      .query<any>({
        query: GET_RENTAL_QUERY,
        variables: { rentalId: id },
      })
      .subscribe({
        next: ({ data }) => {
          response.next(data.getRental);
        },
        error: (error) => {
          console.log('Error: ', error);
          response.next(error);
        },
      });
    return response.asObservable();
  }
}
