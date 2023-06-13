import { Injectable } from "@angular/core";
import { GET_FILMS_QUERY, FilmListModel, GetFilmsFilterInput, Film, rentFilm } from "../../../graphql/film";
import { Apollo } from "apollo-angular";
import { Subject } from "rxjs";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";

import { GET_FILM_QUERY } from "src/app/graphql/get-film";
import { RentFilmInput } from "src/app/graphql/rents";
import { Rental } from "src/app/models/rental.model";

@Injectable({
  providedIn: "root",
})
export class FilmsApiService {
  constructor(private apollo: Apollo, private snackBar: MatSnackBar) {}

  getFilms(filter: GetFilmsFilterInput = {} as GetFilmsFilterInput) {
    let response = new Subject<FilmListModel>();
    this.apollo
      .query<FilmListModel>({
        query: GET_FILMS_QUERY,
        variables: {
          filter: filter,
        },
        fetchPolicy: "network-only",
      })
      .subscribe({
        next: ({ data }) => {
          response.next(data);
        },
        error: (error) => {
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
        fetchPolicy: "network-only",
      })
      .subscribe({
        next: ({ data }) => {
          response.next(data.getFilm);
        },
        error: (error) => {
          console.log("Error: ", error);
          response.next(error);
        },
      });
    return response.asObservable();
  }

  rentFilm(data: RentFilmInput) {
    let response = new Subject<Rental | any>();
    const horizontalPosition: MatSnackBarHorizontalPosition = "center";
    const verticalPosition: MatSnackBarVerticalPosition = "top";

    this.apollo
      .mutate<Rental>({
        mutation: rentFilm,
        variables: {
          data: data,
        },
      })
      .subscribe({
        next: ({ data }) => {
          console.log("data: ", data);
          response.next(data);
          this.snackBar.open("✅ Booking successful ✅", "Close", {
            duration: 3000,
            horizontalPosition,
            verticalPosition,
          });
        },
        error: (error) => {
          this.snackBar.open("❌ Booking failed ❌", "Close", {
            duration: 3000,
            horizontalPosition,
            verticalPosition,
          });
        },
      });
    return response.asObservable();
  }
}
