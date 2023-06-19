import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Rental } from "src/app/models/rental.model";

@Component({
  selector: "app-dialog",
  templateUrl: "./rental-details-dialog.component.html",
})
export class RentalDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<RentalDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public rental: Rental
  ) {}
}
