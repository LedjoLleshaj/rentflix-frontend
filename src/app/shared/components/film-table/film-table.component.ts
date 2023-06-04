import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Apollo } from 'apollo-angular';
import { FILMLIST_QUERY, FilmListModel } from 'src/app/graphql/film';

@Component({
  selector: 'app-film-table',
  templateUrl: './film-table.component.html',
  styleUrls: ['./film-table.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatButtonModule, NgIf, NgFor],
})
export class FilmTableComponent implements OnInit {
  displayedColumns: string[] = ['title', 'year', 'rating', 'category', 'language', 'rental_cost', 'rent'];
  dataSource = FILMS;
  clickedRows = new Set<filmList>();

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .query<FilmListModel>({
        query: FILMLIST_QUERY,
      })
      .subscribe(({ data }) => {
        console.log(data);
      });
  }

  rentMovie(row: any) {
    console.log(row.title, row.year);
  }
}

export interface filmList {
  title: string;
  year: number;
  rating: string;
  category: string;
  language: string;
  cost: number;
}

const FILMS: filmList[] = [
  { title: 'Film 1', year: 1, rating: 'NC-17', category: 'Hydrogen', language: 'English', cost: 6.99 },
  { title: 'Film 2', year: 2, rating: 'NC-17', category: 'Helium', language: 'English', cost: 6.99 },
  { title: 'Film 3', year: 3, rating: 'NC-17', category: 'Lithium', language: 'English', cost: 6.99 },
  { title: 'Film 4', year: 4, rating: 'NC-17', category: 'Beryllium', language: 'English', cost: 6.99 },
  { title: 'Film 5', year: 5, rating: 'NC-17', category: 'Boron', language: 'English', cost: 6.99 },
  { title: 'Film 6', year: 6, rating: 'NC-17', category: 'Carbon', language: 'English', cost: 6.99 },
  { title: 'Film 7', year: 7, rating: 'NC-17', category: 'Nitrogen', language: 'English', cost: 6.99 },
  { title: 'Film 8', year: 8, rating: 'NC-17', category: 'Oxygen', language: 'English', cost: 6.99 },
  { title: 'Film 9', year: 9, rating: 'NC-17', category: 'Fluorine', language: 'English', cost: 6.99 },
  { title: 'Film 10', year: 10, rating: 'NC-17', category: 'Neon', language: 'English', cost: 6.99 },
];
