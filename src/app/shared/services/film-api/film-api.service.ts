import { Injectable } from '@angular/core';
import {
  GET_FILMS_QUERY,
  FilmListModel,
  GetFilmsFilterInput,
  Film,
  RentFilmInput,
  Rental,
  rentFilm,
} from '../../../graphql/film';
import { Apollo } from 'apollo-angular';
import { Subject } from 'rxjs';
import { GET_FILM_QUERY } from 'src/app/graphql/get-film';

@Injectable({
  providedIn: 'root',
})
export class FilmsApiService {
  constructor(private apollo: Apollo) {}

  getFilms(filter: GetFilmsFilterInput = {} as GetFilmsFilterInput) {
    let response = new Subject<FilmListModel>();
    this.apollo
      .query<FilmListModel>({
        query: GET_FILMS_QUERY,
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

  rentFilm(data: RentFilmInput) {
    let response = new Subject<Rental | any>();

    this.apollo
      .mutate<Rental>({
        mutation: rentFilm,
        variables: {
          data: data,
        },
      })
      .subscribe({
        next: ({ data }) => {
          console.log('data: ', data);
          response.next(data);
        },
      });
    return response.asObservable();
  }
}
