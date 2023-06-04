import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  darkMode: boolean = true;

  constructor(public router: Router, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.darkMode = localStorage.getItem('darkMode') === 'true';
    if (this.darkMode && !document.body.classList.contains('rf-dark-theme')) {
      document.body.classList.add('rf-dark-theme');
      return;
    } else {
      document.body.classList.remove('rf-dark-theme');
    }
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', this.darkMode.toString());
    if (this.darkMode) {
      document.body.classList.add('rf-dark-theme');
      return;
    }
    document.body.classList.remove('rf-dark-theme');
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

}
