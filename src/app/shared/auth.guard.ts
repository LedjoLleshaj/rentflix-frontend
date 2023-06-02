import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated.pipe(
      tap(loggedIn => {
        console.log(loggedIn)
        if (loggedIn) {
          // User is already logged in, redirect to home page
          this.router.navigate(['/']);
        }
        return !loggedIn;
      })
    );
  }
}
