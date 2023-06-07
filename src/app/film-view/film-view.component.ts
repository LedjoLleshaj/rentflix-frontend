import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.scss'],
})
export class FilmViewComponent implements OnInit {
  searchTitle = '';

  constructor() {}

  ngOnInit(): void {}

  onSearchTitleChange(event: any) {
    this.searchTitle = event.target.value;
    console.log(this.searchTitle);
  }
}
