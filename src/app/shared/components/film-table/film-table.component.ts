import { Component, OnInit, ViewChild } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Apollo } from 'apollo-angular';
import { FILMLIST_QUERY, FilmListModel, FilmModel } from 'src/app/graphql/film';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { GetFilmsFilterInput } from 'src/app/graphql/film';
import { GetFilmsService } from '../../services/get-films/get-films.service';
import { FilmDetailsDialogComponent } from '../film-details-dialog/film-details-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-film-table',
  templateUrl: './film-table.component.html',
  styleUrls: ['./film-table.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatPaginatorModule, NgIf, NgFor],
  providers: [GetFilmsService]
})


export class FilmTableComponent implements OnInit {
  displayedColumns: string[] = ['title', 'year', 'rating', 'category', 'language', 'rental_cost', 'rent'];
  dataSource: FilmModel[] = [];
  clickedRows = new Set<FilmModel>();
  paginatedData: FilmModel[] = [];

  constructor(private GetFilmsService: GetFilmsService, private dialog: MatDialog) {
  }

  @ViewChild(MatPaginatorModule) paginator!: MatPaginatorModule;

  ngOnInit() {
    const films = this.GetFilmsService.getFilms({
      page: 2,
      filmPerPage: 10
    } as GetFilmsFilterInput).subscribe((data) => {
      this.dataSource = data.getFilms.films;
      this.paginatedData = this.dataSource;
    });
  }

  rentMovie(row: any) {
    // console.log(row.title, row.year);
    const dialogRef = this.dialog.open(FilmDetailsDialogComponent, {
      width: '900px',
      data: { id: row.film_id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  nextPage(event: PageEvent) {
    //const startIndex = event.pageIndex * event.pageSize;
    //let endIndex = startIndex + event.pageSize;
    //if (endIndex > this.dataSource.length) {
    //  endIndex = this.dataSource.length;
    //}
    //this.paginatedData = this.dataSource.slice(startIndex, endIndex);
    //console.log(this.paginatedData);
  }
}
