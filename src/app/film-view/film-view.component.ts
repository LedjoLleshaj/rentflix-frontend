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
  timer: any;
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
    this.fetchFilms();
    this.refresh();
  }

  onSearchTitleChange(event: any) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.filter.title = event.target.value;
      this.fetchFilms();
    }, 500);
  }

  nextPage(event: PageEvent) {
    this.filter.page = event.pageIndex + 1;
    this.filter.filmPerPage = event.pageSize;
    this.fetchFilms();
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
            this.fetchFilms();
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
    this.fetchFilms();
  }

  fetchFilms() {
    this.filmsApiService.getFilms(this.filter).subscribe((data) => {
      this.data = data.getFilms.films;
      this.total = data.getFilms.total;
    });
  }

  refresh() {
    this.fetchFilms();
    setTimeout(() => {
      console.log('refreshing data...');
      this.refresh();
    }, 30 * 1000);
  }
}
