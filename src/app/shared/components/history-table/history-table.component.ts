import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { Rental } from '../../../models/rental.model';

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatPaginatorModule, NgIf, NgFor, MatSortModule, DatePipe],
})
export class HistoryTableComponent {
  columns: string[] = ['title', 'rental_date', 'return_date', 'rental_period', 'address', 'amount', 'rental-info'];
  @Input() data: Rental[] = [];
  @Input() total: number = 0;
  @Output() nextPage: EventEmitter<any> = new EventEmitter();
  @Output() infoMovie: EventEmitter<any> = new EventEmitter();
  @Output() infoRental: EventEmitter<any> = new EventEmitter();
  @Output() announceSortChange: EventEmitter<any> = new EventEmitter();

  @ViewChild(MatPaginatorModule) paginator!: MatPaginatorModule;

  ngOnInit() {}
}
