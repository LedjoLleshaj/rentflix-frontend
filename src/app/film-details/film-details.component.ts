import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../shared/components/film-details-dialog/film-details-dialog.component'; // Import the dialog component


@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent {
  constructor(private dialog: MatDialog) { }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '900px',
      data: { id: id } // Pass the ID as data to the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
