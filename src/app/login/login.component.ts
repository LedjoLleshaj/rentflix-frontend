import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { CreateUserQueryResponse, LOGIN_QUERY } from '../graphql/login';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LS_AUTH_TOKEN } from '../shared/constants';

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
        localStorage.setItem(LS_AUTH_TOKEN, data.login.token);
        this.router.navigate(['/']);
      },
      error: (error) => {
        this.snackBar.open('Username or password not correct');
      }
    });

  }
}
