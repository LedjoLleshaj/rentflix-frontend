import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { CreateUserQueryResponse, LOGIN_QUERY } from '../graphql/login';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LOCAL_STORAGE_KEYS } from '../shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private router: Router,
              private apollo: Apollo,
              private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
  }

  confirm() {
    this.apollo.query<CreateUserQueryResponse>({
      query: LOGIN_QUERY,
      variables: {
        username: this.username,
        password: this.password
      }
    }).subscribe({
      next: ({ data }) => {
        const token = data.login.token;
        const userData = atob(token.split('.')[1]);
        localStorage.setItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN, data.login.token);
        localStorage.setItem(LOCAL_STORAGE_KEYS.USERNAME, JSON.parse(userData).username);
        localStorage.setItem(LOCAL_STORAGE_KEYS.FIRST_NAME, data.login.first_name);
        localStorage.setItem(LOCAL_STORAGE_KEYS.LAST_NAME, data.login.last_name);
        this.router.navigate(['/']);
      },
      error: (error) => {
        this.snackBar.open('Username or password not correct');
      }
    });

  }
}
