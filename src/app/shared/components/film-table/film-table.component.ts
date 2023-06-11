import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Film } from 'src/app/graphql/film';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-film-table',
  templateUrl: './film-table.component.html',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatPaginatorModule, NgIf, NgFor, MatSortModule]
})
export class FilmTableComponent {
  columns: string[] = ['title', 'release_year', 'rating', 'category', 'language', 'rental_rate', 'rent'];
  @Input() data: Film[];
  @Input() total: number;
  @Output() nextPage: EventEmitter<PageEvent> = new EventEmitter();
  @Output() rentMovie: EventEmitter<any> = new EventEmitter();
  @Output() infoMovie: EventEmitter<any> = new EventEmitter();

  @ViewChild(MatPaginatorModule) paginator!: MatPaginatorModule;
}
