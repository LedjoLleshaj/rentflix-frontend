import { Component, Output } from '@angular/core';
import { RentalApiService } from '../shared/services/rental-api/rental-api.service';
import { GetRentalFilterInput, Rent } from '../models/rental.model';
import { PageEvent } from '@angular/material/paginator';
import { CardInput } from '../shared/components/stat-card/stat-card.component';
import { RentalStats } from '../graphql/rents';

@Component({
  selector: 'app-history-view',
  templateUrl: './history-view.component.html',
  styleUrls: ['./history-view.component.scss'],
  providers: [RentalApiService],
})
export class HistoryViewComponent {
  data: Rent[];
  total: number;
  stats: RentalStats = {} as RentalStats;
  @Output() cardData: CardInput[];

  constructor(private RentalApiService: RentalApiService) {}

  ngOnInit() {
    this.RentalApiService.getRentsOfCustomer({
      page: 1,
      itemsPerPage: 10,
    } as GetRentalFilterInput).subscribe((data) => {
      this.total = data.getRentals.total;
      this.data = data.getRentals.rentals;
      // console.log(data);
    });

    this.RentalApiService.getRentalsStats().subscribe((data) => {
      this.stats = data.getUser.rental_stats;
      console.log(this.stats.most_frequent_category.name);

      this.cardData = [
        {
          icon: 'upcoming',
          stat: String(this.stats.current_rentals),
          description: 'Rentals in progress',
          iconColor: 'text-orange-400',
        },
        {
          icon: 'wallet',
          stat: String(this.stats.total_amount),
          description: 'Total spent on rentals',
          iconColor: 'text-green-700',
        },
        {
          icon: 'category',
          stat: this.stats?.most_frequent_category?.name,
          description: 'Your favorite category',
          iconColor: 'text-cyan-700',
        },
        {
          icon: 'timeline',
          stat: String(this.stats.total_rentals),
          description: 'Total rentals bought',
          iconColor: 'text-violet-800',
        },
      ];
    });
  }

  nextPage(event: PageEvent) {
    this.RentalApiService.getRentsOfCustomer({
      page: event.pageIndex + 1,
      itemsPerPage: event.pageSize,
    } as GetRentalFilterInput).subscribe((data) => {
      this.total = data.getRentals.total;
      this.data = data.getRentals.rentals;
      console.log(this.data);
    });
  }

  infoMovie(rent: Rent) {
    console.log(rent);
  }

  announceSortChange(sort: any) {
    console.log(sort);
  }
}
