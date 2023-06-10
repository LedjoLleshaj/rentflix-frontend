import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Rental } from 'src/app/models/rental.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './rental-details-dialog.component.html',
  styleUrls: ['./rental-details-dialog.component.scss']
})
export class RentalDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<RentalDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public rental: Rental,
  ) { }

  get rentalStartLabel() {
    // Format the rental start date to DD/MM/YYYY
    console.log(this.rental.rental_date)
    return new Date(this.rental.rental_date).toLocaleDateString('en-GB')
  }
}
