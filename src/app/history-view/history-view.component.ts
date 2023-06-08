import { Component, Output } from '@angular/core';
import { RentalApiService } from '../shared/services/rental-api/rental-api.service';
import { GetRentalFilterInput, Rent } from '../models/rental.model';
import { PageEvent } from '@angular/material/paginator';
import { CardInput } from '../shared/components/stat-card/stat-card.component';

@Component({
  selector: 'app-history-view',
  templateUrl: './history-view.component.html',
  styleUrls: ['./history-view.component.scss'],
  providers: [RentalApiService],
})
export class HistoryViewComponent {
  data: Rent[];
  total: number;
  filter: GetRentalFilterInput = {
    page: 1,
    itemsPerPage: 10,
    orderBy: '',
    sort: 'asc',
  };

  @Output() cardData: CardInput[];

  constructor(private RentalApiService: RentalApiService) {}

  ngOnInit() {
    this.RentalApiService.getRentsOfCustomer(this.filter).subscribe((data) => {
      this.total = data.getRentals.total;
      this.data = data.getRentals.rentals;
    });

    this.RentalApiService.getRentalsStats().subscribe((data) => {
      this.cardData = [
        {
          icon: 'upcoming',
          stat: String(data.getUser.rental_stats.current_rentals),
          description: 'Rentals in progress',
          iconColor: 'text-orange-400',
        },
        {
          icon: 'wallet',
          stat: String(data.getUser.rental_stats.total_amount) + ' €',
          description: 'Total spendings (€)',
          iconColor: 'text-green-700',
        },
        {
          icon: 'category',
          stat: data.getUser.rental_stats?.most_frequent_category?.name,
          description: 'Favorite category  ',
          iconColor: 'text-cyan-700',
        },
        {
          icon: 'timeline',
          stat: String(data.getUser.rental_stats.total_rentals),
          description: 'Total rentals      ',
          iconColor: 'text-violet-800',
        },
      ];
    });
  }

  nextPage(event: PageEvent) {
    this.filter.page = event.pageIndex + 1;
    this.filter.itemsPerPage = event.pageSize;
    this.RentalApiService.getRentsOfCustomer(this.filter).subscribe((data) => {
      this.total = data.getRentals.total;
      this.data = data.getRentals.rentals;
      console.log(this.data);
    });
  }

  infoMovie(rent: Rent) {
    console.log(rent);
  }

  updateFilter(sort: any) {
    this.filter.sort = this.filter.sort === 'asc' ? 'desc' : 'asc';
    if (sort.active === 'title') this.filter.orderBy = 'film.title';
    else if (sort.active === 'amount') this.filter.orderBy = 'payment.amount';
    else if (sort.active === 'rental_date') this.filter.orderBy = 'rental_date';
    else if (sort.active === 'return_date') this.filter.orderBy = 'return_date';
    else if (sort.active === 'rental_period') this.filter.orderBy = 'rental_period';
    else if (sort.active === 'address') this.filter.orderBy = 'store.address';
    else this.filter.orderBy = '';
  }

  announceSortChange(sort: any) {
    this.updateFilter(sort);
    console.log(this.filter.orderBy);
    this.RentalApiService.getRentsOfCustomer(this.filter).subscribe((data) => {
      this.total = data.getRentals.total;
      this.data = data.getRentals.rentals;
      console.log(this.data);
    });
  }
}
