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
  dataSource: any = [];
  clickedRows = new Set<filmList>();

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .query<FilmListModel>({
        query: FILMLIST_QUERY,
      })
      .subscribe(({ data }) => {
        console.log(data);
        this.dataSource = data.filmList;
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
