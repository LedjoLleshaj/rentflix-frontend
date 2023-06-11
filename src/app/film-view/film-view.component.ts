import { Component } from '@angular/core';
import { Film, GetFilmsFilterInput } from '../graphql/film';
import { FilmsApiService } from '../shared/services/film-api/film-api.service';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { FilmDetailsDialogComponent } from '../shared/components/film-details-dialog/film-details-dialog.component';
import { FilmRentDialogComponent } from '../shared/components/film-rent-dialog/film-rent-dialog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.scss'],
  providers: [FilmsApiService, MatProgressSpinnerModule],
})
export class FilmViewComponent {
  data: Film[];
  total: number = 0;
  searchTitle: string = '';
  filter: GetFilmsFilterInput = {
    title: '',
    categories: [],
    page: 1,
    filmPerPage: 10,
    orderBy: 'title',
    sort: 'asc',
  };

  constructor(private filmsApiService: FilmsApiService, private dialog: MatDialog) {}

  ngOnInit() {
    this.filmsApiService.getFilms(this.filter).subscribe((data) => {
      this.data = data.getFilms.films;
      this.total = data.getFilms.total;
    });
  }

  onSearchTitleChange(event: any) {
    this.filter.title = event.target.value;
    this.filmsApiService.getFilms(this.filter).subscribe((data) => {
      this.data = data.getFilms.films;
      this.total = data.getFilms.total;
    });
  }

  nextPage(event: PageEvent) {
    this.filter.page = event.pageIndex + 1;
    this.filter.filmPerPage = event.pageSize;
    this.filmsApiService.getFilms(this.filter).subscribe((data) => {
      this.data = data.getFilms.films;
      this.total = data.getFilms.total;
    });
  }

  rentMovie(film: Film) {
    this.filmsApiService.getFilm(film.film_id).subscribe((film) => {
      this.dialog
        .open(FilmRentDialogComponent, {
          width: '560px',
          data: film,
        })
        .afterClosed()
        .subscribe({
          next: (rental) => {
            if (rental) {
              console.log(rental);

              this.filmsApiService.rentFilm(rental).subscribe((data) => {
                console.log(data);
              });
            }
            this.filmsApiService.getFilms(this.filter).subscribe((data) => {
              console.log('Refreshed films', data);
              this.data = data.getFilms.films;
              this.total = data.getFilms.total;
            });
          },
        });
    });
  }

  infoMovie(film: Film) {
    this.filmsApiService.getFilm(film.film_id).subscribe((film) => {
      this.dialog
        .open(FilmDetailsDialogComponent, {
          width: '900px',
          data: film,
        })
        .afterClosed()
        .subscribe((result) => {
          if (result === 1) this.rentMovie(film);
        });
    });
  }

  handleSelectedCategories(category: number[]) {
    this.filter.categories = category;
    this.filmsApiService.getFilms(this.filter).subscribe((data) => {
      this.data = data.getFilms.films;
      this.total = data.getFilms.total;
    });
  }
}
