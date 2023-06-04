import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LS_AUTH_TOKEN } from './constants';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem(LS_AUTH_TOKEN) === null) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
