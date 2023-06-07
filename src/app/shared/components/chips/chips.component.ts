import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { Apollo } from 'apollo-angular';
import { GET_CATEGORIES_QUERY } from 'src/app/graphql/film';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  standalone: true,
  imports: [MatChipsModule, NgFor],
})
export class ChipsComponent implements OnInit {
  categories: string[];

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .query({
        query: GET_CATEGORIES_QUERY,
      })
      .subscribe((data: any) => {
        this.categories = data.data.getCategories.map((category: any) => category.name);
      });
  }
}
