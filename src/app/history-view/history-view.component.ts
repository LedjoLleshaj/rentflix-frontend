import { Component } from '@angular/core';
import { FilmColumn } from '../models/film.model';
import { FilmModel, GetFilmsFilterInput } from '../graphql/film';
import { GetFilmsService } from '../shared/services/get-films/get-films.service';

@Component({
  selector: 'app-history-view',
  templateUrl: './history-view.component.html',
  styleUrls: ['./history-view.component.scss'],
  providers: [GetFilmsService]
})
export class HistoryViewComponent {
  columns: FilmColumn[] = [
    {
      title: 'Title',
      field: 'title',
      sortable: true
    },
    {
      title: 'Release Year',
      field: 'release_year',
      sortable: true
    },
    {
      title: 'Rating',
      field: 'rating',
      sortable: true
    },
    {
      title: 'Category',
      field: 'category',
      sortable: true
    },
    {
      title: 'Language',
      field: 'language',
      sortable: true
    },
    {
      title: 'Rental Rate',
      field: 'rental_rate',
      sortable: true
    },
    {
      title: 'Rent',
      field: 'rent',
      sortable: true
    }
  ];

  data: FilmModel[];
  total: number = 0;

  constructor(private GetFilmsService: GetFilmsService) {
  }

  ngOnInit() {
    this.GetFilmsService.getFilms({
      page: 1,
      filmPerPage: 10
    } as GetFilmsFilterInput).subscribe((data) => {
      console.log(data);
      this.total = data.getFilms.total;
      this.data = data.getFilms.films;
    });
  }
}
