import { Component, OnInit } from '@angular/core';
import { GetFilmsService } from '../shared/services/get-films/get-films.service';
import { FilmModel, GetFilmsFilterInput } from '../graphql/film';
import { PageEvent } from '@angular/material/paginator';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.scss'],
  providers: [GetFilmsService]
})
export class FilmViewComponent {
  data: FilmModel[];
  total: number = 0;
  searchTitle: string = '';

  constructor(private GetFilmsService: GetFilmsService) {
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

  rentMovie(film: FilmModel) {
    console.log(film);
  }

  infoMovie(film: FilmModel) {
    console.log(film);
  }

  handleSelectedCategories(category: string[]) {
    console.log(category);
  }
}
