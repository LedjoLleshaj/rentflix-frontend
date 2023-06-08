import { Component, Input } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { AvailableStore } from 'src/app/graphql/film';
import { NgForOf } from '@angular/common';


@Component({
  selector: 'app-select-store',
  templateUrl: './select-store.component.html',
  styleUrls: ['./select-store.component.scss'],
  standalone: true,
  imports: [MatChipsModule, NgForOf],
})
export class SelectStoreComponent {
  @Input() availableStores: AvailableStore[];
  @Input() selectedStore?: AvailableStore;

  ngOnInit() {
    if (this.availableStores.length === 1) {
      this.selectedStore = this.availableStores[0];
    }
  }

  selectStore(store: AvailableStore) {
    this.selectedStore = store;
  }
}
