import { Component } from '@angular/core';
import { RentalApiService } from '../shared/services/rental-api/rental-api.service';
import { GetRentalOfCustomerFilter, Rent } from '../models/rental.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-history-view',
  templateUrl: './history-view.component.html',
  styleUrls: ['./history-view.component.scss'],
  providers: [RentalApiService]
})
export class HistoryViewComponent {

  data: Rent[];
  total: number = 0;

  constructor(private RentalApiService: RentalApiService) {
  }

  ngOnInit() {
    this.RentalApiService.getRentsOfCustomer({
      page: 1,
      filmPerPage: 10
    } as GetRentalOfCustomerFilter).subscribe((data) => {
      this.total = data.total;
      this.data = data.rents;
    });
  }

  nextPage(event: PageEvent) {
    this.RentalApiService.getRentsOfCustomer({
      page: event.pageIndex + 1,
      filmPerPage: event.pageSize
    } as GetRentalOfCustomerFilter).subscribe((data) => {
      this.total = data.total;
      this.data = data.rents;
    });
  }

  infoMovie(rent: Rent) {
    console.log(rent);
  }

  announceSortChange(sort: any) {
    console.log(sort);
  }

}
