import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  GET_RENTS_OF_COSTUMER,
  GetRentalOfCustomerApiOutput,
  GetRentalOfCustomerFilter,
  GetRentalOfCustomerOutput,
} from '../../../models/rental.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RentalApiService {
  constructor(private apollo: Apollo) {}

  getRentsOfCustomer(filter: GetRentalOfCustomerFilter) {
    let response = new Subject<GetRentalOfCustomerOutput>();
    this.apollo
      .query<GetRentalOfCustomerApiOutput>({
        query: GET_RENTS_OF_COSTUMER,
        variables: {
          filter: filter,
        },
      })
      .subscribe({
        next: ({ data }) => {
          response.next(data.getRentsOfCustomer);
        },
        error: (error) => {
          console.log('Error: ', error);
          response.next(error);
        },
      });
    return response.asObservable();
  }
}
