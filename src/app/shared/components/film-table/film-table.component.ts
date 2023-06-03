import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-film-table',
  templateUrl: './film-table.component.html',
  styleUrls: ['./film-table.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatButtonModule, NgIf, NgFor],
})
export class FilmTableComponent {
  displayedColumns: string[] = ['title', 'year', 'rating', 'category', 'language', 'rental_cost', 'rent'];
  dataSource = FILMS;
  clickedRows = new Set<filmList>();

  rentMovie(row: any) {
    console.log(row.title, row.year);
  }
}

export interface filmList {
  title: string;
  year: number;
  rating: string;
  category: string;
  language: string;
  rental_cost: number;
}

const FILMS: filmList[] = [
  { title: 'Title', year: 1, rating: 'NC-17', category: 'Hydrogen', language: 'English', rental_cost: 6.99 },
  { title: 'Title', year: 2, rating: 'NC-17', category: 'Helium', language: 'English', rental_cost: 6.99 },
  { title: 'Title', year: 3, rating: 'NC-17', category: 'Lithium', language: 'English', rental_cost: 6.99 },
  { title: 'Title', year: 4, rating: 'NC-17', category: 'Beryllium', language: 'English', rental_cost: 6.99 },
  { title: 'Title', year: 5, rating: 'NC-17', category: 'Boron', language: 'English', rental_cost: 6.99 },
  { title: 'Title', year: 6, rating: 'NC-17', category: 'Carbon', language: 'English', rental_cost: 6.99 },
  { title: 'Title', year: 7, rating: 'NC-17', category: 'Nitrogen', language: 'English', rental_cost: 6.99 },
  { title: 'Title', year: 8, rating: 'NC-17', category: 'Oxygen', language: 'English', rental_cost: 6.99 },
  { title: 'Title', year: 9, rating: 'NC-17', category: 'Fluorine', language: 'English', rental_cost: 6.99 },
  { title: 'Title', year: 10, rating: 'NC-17', category: 'Neon', language: 'English', rental_cost: 6.99 },
];
