import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './film-details-dialog.component.html',
  styleUrls: ['./film-details-dialog.component.scss']
})
export class DialogComponent {
  film: any;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    // Make an HTTP request when the dialog component is initialized
    // TODO: Make HTTP request to get film details

    // Mock data from filmDetails
    this.film = {
      film_id: 1,
      title: 'Test',
      release_year: 2020,
      language: 'English',
      length: 120,
      rating: 'PG',
      description: 'This is a test film',
      actors: 'John Doe, Jane Doe',
      category: 'Test',
      rental_duration: 3,
      rental_rate: 4.99,
      disponibility: [
        {
          street: '123 Test St',
          city: 'Test City',
          region: 'Test Region',
          country: 'Test Country'
        }
      ]
    };
  }

  onClose(): void {
    this.dialogRef.close();
  }

  startRent(): void {
    this.dialogRef.close();

    // TODO: Open rent dialog
  }

  getFlagEmoji(language: string): string {
    // Map language codes to flag emojis
    const flagMap: { [key: string]: string } = {
      English: "\uD83C\uDDEC\uD83C\uDDE7", // England
      French: "\uD83C\uDDEB\uD83C\uDDF7", // France
      Deutch: "\uD83C\uDDE9\uD83C\uDDEA", // Germany
      Italian: "\uD83C\uDDEE\uD83C\uDDF9", // Italy
      Spanish: "\uD83C\uDDEA\uD83C\uDDF8", // Spain
      Japanese: "\uD83C\uDDEF\uD83C\uDDF5", // Japan
      Chinese: "\uD83C\uDDE8\uD83C\uDDF3", // China
      Russian: "\uD83C\uDDF7\uD83C\uDDFA", // Russia
      Korean: "\uD83C\uDDF0\uD83C\uDDF7", // South Korea
      Hindi: "\uD83C\uDDED\uD83C\uDDF3", // India
      Arabic: "\uD83C\uDDE6\uD83C\uDDEA", // Saudi Arabia
      // Add more language codes and corresponding flag emojis here
    };

    // Check if the language code exists in the flag map
    if (language in flagMap) {
      return flagMap[language];
    }

    // Return an empty string if the language code is not found
    return language;
  }

}
