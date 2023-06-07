import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  selected: string[] = [];
  @Output() selectedCategories = new EventEmitter<string[]>();

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

  onChipSelectionChange(event: any): void {
    const cat = event.source.value;
    if (this.selected.includes(cat)) {
      this.selected = this.selected.filter((item) => item !== cat);
    } else {
      this.selected.push(cat);
    }
    this.selectedCategories.emit(this.selected);
  }
}
