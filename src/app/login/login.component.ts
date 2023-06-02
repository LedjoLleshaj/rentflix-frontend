import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Apollo} from 'apollo-angular';
import { AuthService } from '../shared/auth.service';
import { CreateUserQueryResponse, LOGIN_QUERY } from '../graphql/login';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private router: Router,
              private authService: AuthService,
              private apollo: Apollo,
              private snackBar: MatSnackBar,
  ) { }

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
        next: ({data}) => {
          this.authService.saveUserData(data.login.token);
          this.router.navigate(['/']);
        },
        error: (error) => {
          this.snackBar.open('Username o password errati!');
          // console.log('there was an error sending the query', error);
        }
      });

  }
}
