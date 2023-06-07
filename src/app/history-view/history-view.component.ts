import { Component } from '@angular/core';
import { FilmModel, GetFilmsFilterInput } from '../graphql/film';
import { GetFilmsService } from '../shared/services/get-films/get-films.service';
import { RentalApiService } from '../shared/services/rental-api/rental-api.service';
import { GetRentalOfCustomerFilter, Rent } from '../models/rental.model';
import { PageEvent } from '@angular/material/paginator';
import { DatePipe } from '@angular/common';

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
      console.log(data);
      this.total = data.total;
      this.data = data.rents;
    });
  }

  nextPage(event: PageEvent) {
    console.log(event);
  }

  infoMovie(rent: Rent) {
    console.log(rent);
  }

}
