import { Component, OnInit } from '@angular/core';
import { FilmsApiService } from '../shared/services/film-api/film-api.service';
import { FilmModel, GetFilmsFilterInput } from '../graphql/film';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.scss'],
  providers: [FilmsApiService],
})
export class FilmViewComponent {
  data: FilmModel[];
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

  constructor(private FilmsApiService: FilmsApiService) {}

  ngOnInit() {
    this.FilmsApiService.getFilms(this.filter).subscribe((data) => {
      this.data = data.getFilms.films;
      this.total = data.getFilms.total;
    });
  }

  onSearchTitleChange(event: any) {
    this.searchTitle = event.target.value;
    console.log(this.searchTitle);
  }

  nextPage(event: PageEvent) {
    this.filter.page = event.pageIndex + 1;
    this.filter.filmPerPage = event.pageSize;
    console.log(this.filter);
    this.FilmsApiService.getFilms(this.filter).subscribe((data) => {
      this.data = data.getFilms.films;
      this.total = data.getFilms.total;
    });
  }

  rentMovie(film: FilmModel) {
    console.log(film);
  }

  infoMovie(film: FilmModel) {
    console.log(film);
  }

  handleSelectedCategories(category: number[]) {
    console.log(this.filter);
    this.filter.categories = [...category];
    console.log(this.filter);
    this.FilmsApiService.getFilms(this.filter).subscribe((data) => {
      this.data = data.getFilms.films;
      this.total = data.getFilms.total;
    });
  }
}
