import { Injectable } from '@angular/core';
import { FILMLIST_QUERY, FilmListModel, GetFilmsFilterInput } from '../../../graphql/film';
import { Apollo } from 'apollo-angular';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetFilmsService {
  constructor(private apollo: Apollo) {}

  getFilms(filter: GetFilmsFilterInput = {} as GetFilmsFilterInput) {
    let response = new Subject<FilmListModel>();
    this.apollo
      .query<FilmListModel>({
        query: FILMLIST_QUERY,
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
}
