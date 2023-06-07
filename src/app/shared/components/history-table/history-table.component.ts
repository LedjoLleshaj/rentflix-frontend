import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FilmModel } from '../../../graphql/film';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { NgFor, NgIf } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { Rent } from '../../../models/rental.model';

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatPaginatorModule, NgIf, NgFor, MatSortModule]
})

export class HistoryTableComponent {
  columns: string[] = ['title', 'rental_date', 'return_date', 'address', 'amount'];
  @Input() data: Rent[] = [];
  @Input() total: number = 0;
  @Output() nextPage: EventEmitter<any> = new EventEmitter();
  @Output() rentMovie: EventEmitter<any> = new EventEmitter();
  @Output() infoMovie: EventEmitter<any> = new EventEmitter();

  @ViewChild(MatPaginatorModule) paginator!: MatPaginatorModule;

  ngOnInit() {
  }
}
