import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  zoomPercentage = 100;

  zoom(direciton: number) {
    this.zoomPercentage += direciton;
    let className = document.body.className;
    className = className.replace(/rf-zoom-\d/g, '');
    document.body.className += className + ` rf-zoom-${(this.zoomPercentage)}`;
  }
}
