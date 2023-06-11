import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Film } from 'src/app/graphql/film';

@Component({
  selector: 'app-dialog',
  templateUrl: './film-details-dialog.component.html'
})
export class FilmDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<FilmDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public film: Film
  ) {
  }

  startRent(): void {
    this.dialogRef.close(1);
  }

  actorsList = () => {
    return this.film.actors?.map((actor) => {
      return `${actor.first_name} ${actor.last_name}`;
    }).join(', ');
  };

  getFlagEmoji(language: string): string {
    language = language.trim();
    // Map language codes to flag emojis
    const flagMap: { [key: string]: string } = {
      English: '\uD83C\uDDEC\uD83C\uDDE7', // England
      Italian: '\uD83C\uDDEE\uD83C\uDDF9', // Italy
      Japanese: '\uD83C\uDDEF\uD83C\uDDF5', // Japan
      Mandarin: '\uD83C\uDDE8\uD83C\uDDF3', // China
      French: '\uD83C\uDDEB\uD83C\uDDF7', // France
      German: '\uD83C\uDDE9\uD83C\uDDEA' // Germany
    };

    // Check if the language code exists in the flag map
    if (language in flagMap) {
      return flagMap[language];
    }

    // Return an empty string if the language code is not found
    return language;
  }

}
