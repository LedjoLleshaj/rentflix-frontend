import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subject } from 'rxjs';
import { LOGIN_QUERY } from 'src/app/graphql/login';
import { AuthDetails, AuthResponse } from 'src/app/models/auth.model';
import { LOCAL_STORAGE_KEYS } from '../../constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private apollo: Apollo) {}

  login(username: string, password: string) {
    let response = new Subject<AuthDetails>();
    this.apollo
      .query<AuthResponse>({
        query: LOGIN_QUERY,
        variables: { username, password }
      })
      .subscribe({
        next: ({ data }) => response.next(data.login),
        error: (error) => response.error(error),
      });
    return response.asObservable();
  }

  static logout() {
    Object.values(LOCAL_STORAGE_KEYS).forEach((key) => {
      if (key !== LOCAL_STORAGE_KEYS.DARK_MODE) {
        localStorage.removeItem(key);
      }
    });
  }

}
