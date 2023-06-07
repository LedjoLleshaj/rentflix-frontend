import { Component } from '@angular/core';
import { GetFilmsService } from '../shared/services/films/get-films.service';
import { Film, GetFilmsFilterInput } from '../graphql/film';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { FilmDetailsDialogComponent } from '../shared/components/film-details-dialog/film-details-dialog.component';
import { GetFilmService } from '../shared/services/films/get-film.service';
import { FilmRentDialogComponent } from '../shared/components/film-rent-dialog/film-rent-dialog.component';

@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.scss'],
  providers: [GetFilmsService]
})


export class FilmViewComponent {
  data: Film[];
  total: number = 0;
  searchTitle: string = '';

  constructor(private GetFilmsService: GetFilmsService, private GetFilmService: GetFilmService ,private dialog: MatDialog) {
  }

  ngOnInit() {
    this.GetFilmsService.getFilms({
      page: 1,
      filmPerPage: 10
    } as GetFilmsFilterInput).subscribe((data) => {
      this.data = data.getFilms.films;
      this.total = data.getFilms.total;
    });
  }
  onSearchTitleChange(event: any) {
    this.searchTitle = event.target.value;
    console.log(this.searchTitle);
  }

  nextPage(event: PageEvent) {
    this.GetFilmsService.getFilms({
      page: event.pageIndex + 1,
      filmPerPage: event.pageSize
    } as GetFilmsFilterInput).subscribe((data) => {
      this.data = data.getFilms.films;
      this.total = data.getFilms.total;
    });
  }

  rentMovie(film: Film) {
    this.GetFilmService.getFilm(film.film_id).subscribe((film) => {
      this.dialog.open(FilmRentDialogComponent, {
        width: '900px',
        data: film
      }).afterClosed().subscribe((result) => {
        if (result === 1) {
          // TODO: Add rent mutation
        }
      });
    });
  }

  infoMovie(film: Film) {
    this.GetFilmService.getFilm(film.film_id).subscribe((film) => {
      this.dialog.open(FilmDetailsDialogComponent, {
        width: '900px',
        data: film
      }).afterClosed().subscribe((result) => {
        if (result === 1) this.rentMovie(film);
      });
    });
  }
}
