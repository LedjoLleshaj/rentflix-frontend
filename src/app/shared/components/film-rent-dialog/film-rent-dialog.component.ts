import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AvailableStore, Film, RentalRequest } from 'src/app/graphql/film';

import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { SelectStoreComponent } from '../select-store/select-store.component';

import { NgForOf, NgIf } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-film-rent-dialog',
  templateUrl: './film-rent-dialog.component.html',
  styleUrls: ['./film-rent-dialog.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    SelectStoreComponent,
    NgIf,
    NgForOf,
    MatChipsModule,
    MatCardModule,
  ],
})
export class FilmRentDialogComponent {
  // selectedStore?: AvailableStore;
  // rentalDate?: Date;

  rentalForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<FilmRentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public film: Film
  ) {
    this.rentalForm = this._formBuilder.group({
      selectedStoreControl: new FormControl<AvailableStore | null>(null, Validators.required),
      selectedDateControl: new FormControl<Date | null>(null, Validators.required),
    });

    if (film.availableStores?.length === 1) {
      this.rentalForm.get('selectedStoreControl')?.setValue(film.availableStores[0]);
    }
  }

  getToday() {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
  }

  getDatePlusNDays(n: number) {
    const date = new Date();
    date.setDate(date.getDate() + n);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  // Format date to DD/MM
  formatDate(date: Date) {
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' });
  }

  get isValidData() {
    return this.selectedStore && this.selectedDate;
  }

  get selectedStore() {
    return this.rentalForm.get('selectedStoreControl')?.value;
  }

  get selectedDate() {
    return this.rentalForm.get('selectedDateControl')?.value;
  }

  get storeLabel() {
    const address = this.selectedStore.address.address;
    const city = this.selectedStore.address.city.city;
    const country = this.selectedStore.address.city.country.country;
    return address + '(' + city + ', ' + country + ')';
  }

  get dateLabel() {
    const date = this.formatDate(this.selectedDate);
    if (this.selectedDate.toISOString() == this.getToday().toISOString()) {
      return 'Today - ' + date;
    } else if (this.selectedDate.toISOString() === this.getDatePlusNDays(1).toISOString()) {
      return 'Tomorrow - ' + date;
    } else {
      return date;
    }
  }

  createRental() {
    const selectedStore = this.rentalForm.get('selectedStoreControl')?.value;
    const selectedDate = this.rentalForm.get('selectedDateControl')?.value;

    const rentalRequest = new RentalRequest(
      this.film.film_id,
      selectedStore?.store_id,
      selectedDate.toString().slice(0, 24)
    );
    this.dialogRef.close(rentalRequest);
  }
}
