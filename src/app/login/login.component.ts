import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { CreateUserQueryResponse, LOGIN_QUERY } from '../graphql/login';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LOCAL_STORAGE_KEYS } from '../shared/constants';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DarkModeService } from '../shared/services/dark-mode/dark-mode.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private apollo: Apollo,
    private snackBar: MatSnackBar,
    public darkModeService: DarkModeService
  ) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.minLength(4))
    });
    this.darkModeService.initDarkModeSettings();
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  confirm() {
    this.apollo
      .query<CreateUserQueryResponse>({
        query: LOGIN_QUERY,
        variables: {
          username: this.username?.value,
          password: this.password?.value
        }
      })
      .subscribe({
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
