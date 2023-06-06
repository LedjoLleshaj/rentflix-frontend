import { Component } from '@angular/core';
import { FilmColumn } from '../models/film.model';

@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.scss']
})


//['title', 'release_year', 'rating', 'category', 'language', 'rental_rate', 'rent']
export class FilmViewComponent {
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

  ngOnInit() {
    console.log(this.columns);
  }
}
