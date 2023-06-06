import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  standalone: true,
  imports: [MatChipsModule],
})
export class ChipsComponent {
  categories: string[];

  constructor(private apollo: Apollo) {}

  // ngOnInit() {}
}
