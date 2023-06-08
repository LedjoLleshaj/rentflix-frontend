import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_RENTS_OF_COSTUMER, GetRentalFilterInput, GetRentalAPI } from '../../../models/rental.model';
import { getRentalsStats, RentalStatistics } from 'src/app/graphql/rents';
import { Subject } from 'rxjs';

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
}
