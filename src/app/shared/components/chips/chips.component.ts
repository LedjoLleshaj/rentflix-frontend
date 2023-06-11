import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { Apollo } from 'apollo-angular';
import { GET_CATEGORIES_QUERY, GetCategoriesModel } from 'src/app/graphql/film';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  standalone: true,
  imports: [MatChipsModule, NgFor]
})
export class ChipsComponent implements OnInit {
  categories: GetCategoriesModel[] = [];
  selected: string[] = [];
  @Output() selectedCategories = new EventEmitter<number[]>();

  constructor(private apollo: Apollo) {
  }

  ngOnInit() {
    this.apollo
      .query({
        query: GET_CATEGORIES_QUERY
      })
      .subscribe((data: any) => {
        this.categories = data.data.getCategories;
      });
  }

  onChipSelectionChange(event: any): void {
    const cat = event.source.value;
    if (this.selected.includes(cat)) {
      this.selected = this.selected.filter((item) => item !== cat);
    } else {
      this.selected.push(cat);
    }
    this.selectedCategories.emit(this.selected.map((item) => parseInt(item)));
  }
}
