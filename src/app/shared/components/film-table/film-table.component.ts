import { Component, OnInit, ViewChild } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Apollo } from 'apollo-angular';
import { FILMLIST_QUERY, FilmListModel, FilmModel } from 'src/app/graphql/film';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-film-table',
  templateUrl: './film-table.component.html',
  styleUrls: ['./film-table.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatPaginatorModule, NgIf, NgFor],
})
export class FilmTableComponent implements OnInit {
  displayedColumns: string[] = ['title', 'year', 'rating', 'category', 'language', 'rental_cost', 'rent'];
  dataSource: FilmModel[] = [];
  clickedRows = new Set<FilmModel>();
  paginatedData: FilmModel[] = [];

  constructor(private apollo: Apollo) {}
  @ViewChild(MatPaginatorModule) paginator!: MatPaginatorModule;

  ngOnInit() {
    this.apollo
      .query<FilmListModel>({
        query: FILMLIST_QUERY,
      })
      .subscribe(({ data }) => {
        console.log(data);
        this.dataSource = data.filmList;
        this.paginatedData = this.dataSource.slice(0, 10);
      });
  }

  rentMovie(row: any) {
    console.log(row.title, row.year);
  }

  nextPage(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.dataSource.length) {
      endIndex = this.dataSource.length;
    }
    this.paginatedData = this.dataSource.slice(startIndex, endIndex);
    console.log(this.paginatedData);
  }
}
