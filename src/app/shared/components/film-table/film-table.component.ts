import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FilmModel } from 'src/app/graphql/film';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { GetFilmsFilterInput } from 'src/app/graphql/film';
import { GetFilmsService } from '../../services/get-films/get-films.service';
import { FilmColumn } from '../../../models/film.model';


@Component({
  selector: 'app-film-table',
  templateUrl: './film-table.component.html',
  styleUrls: ['./film-table.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatPaginatorModule, NgIf, NgFor],
  providers: [GetFilmsService]
})
export class FilmTableComponent implements OnInit {
  @Input() inputColumns: FilmColumn[];
  // dataSource: FilmModel[] = [];
  // clickedRows = new Set<FilmModel>();
  columns: string[] = [];
  paginatedData: FilmModel[] = [];
  total = 0;


  @ViewChild(MatPaginatorModule) paginator!: MatPaginatorModule;

  ngOnInit() {
    //this.GetFilmsService.getFilms({
    //  page: 1,
    //  filmPerPage: 10,
    //} as GetFilmsFilterInput).subscribe((data) => {
    //  console.log(data);
    //  this.total = data.getFilms.total;
    //  this.dataSource = data.getFilms.films;
    //  this.paginatedData = this.dataSource;
    //});
    this.columns = this.inputColumns.map((column) => column.field);
  }

  rentMovie(row: any) {
    //console.log(row.title, row.year);
  }

  nextPage(event: PageEvent) {
    //this.GetFilmsService.getFilms({
    //  page: event.pageIndex + 1,
    //  filmPerPage: event.pageSize,
    //} as GetFilmsFilterInput).subscribe((data) => {
    //  this.dataSource = data.getFilms.films;
    //  this.paginatedData = this.dataSource;
    //});
  }
}
