import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LOCAL_STORAGE_KEYS } from '../shared/constants';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  darkMode: boolean = true;
  username: string = '';
  firstName: string = '';
  lastName: string = '';

  constructor(public router: Router, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.username = localStorage.getItem(LOCAL_STORAGE_KEYS.USERNAME) || '';
    this.firstName = localStorage.getItem(LOCAL_STORAGE_KEYS.FIRST_NAME) || '';
    this.lastName = localStorage.getItem(LOCAL_STORAGE_KEYS.LAST_NAME) || '';
    // make the opposite of the current value cause toggleDarkMode() will negate it
    this.darkMode = !(localStorage.getItem(LOCAL_STORAGE_KEYS.DARK_MODE) === 'true');
    this.toggleDarkMode();
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    localStorage.setItem(LOCAL_STORAGE_KEYS.DARK_MODE, this.darkMode.toString());
    if (this.darkMode) {
      document.body.classList.add('rf-dark-theme');
      return;
    }
    document.body.classList.remove('rf-dark-theme');
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  logout() {
    Object.values(LOCAL_STORAGE_KEYS).forEach(key => {
        if (key !== LOCAL_STORAGE_KEYS.DARK_MODE) {
          localStorage.removeItem(key);
        }
      }
    );
    document.body.classList.remove('rf-dark-theme');
    this.router.navigate(['/login']);
  }

}
