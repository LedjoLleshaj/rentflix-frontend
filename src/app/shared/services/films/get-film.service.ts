import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subject } from 'rxjs';
import { Film } from 'src/app/graphql/film';
import { GET_FILM_QUERY } from 'src/app/graphql/get-film';

@Injectable({
  providedIn: 'root',
})
export class GetFilmService {
  constructor(private apollo: Apollo) {}

  getFilm(id: string) {
    let response = new Subject<Film>();
    this.apollo
      .query<any>({
        query: GET_FILM_QUERY,
        variables: {
          filmId: id,
        },
      })
      .subscribe({
        next: ({ data }) => {
          response.next(data.getFilm);
        },
        error: (error) => {
          console.log('Error: ', error);
          response.next(error);
        },
      });
    return response.asObservable();
  }
}
