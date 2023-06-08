import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

export interface CardInput {
  icon: string;
  stat: string;
  description: string;
  iconColor: string;
}

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatIconModule],
})
export class StatCardComponent {
  @Input() card: CardInput;
}
