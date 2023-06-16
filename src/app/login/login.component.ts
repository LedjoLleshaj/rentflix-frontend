import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Apollo } from "apollo-angular";
import { MatSnackBar } from "@angular/material/snack-bar";
import { LOCAL_STORAGE_KEYS } from "../shared/constants";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DarkModeService } from "../shared/services/dark-mode/dark-mode.service";
import { AuthApiService } from "../shared/services/auth-api/auth-api.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private apollo: Apollo,
    private snackBar: MatSnackBar,
    public darkModeService: DarkModeService,
    private authService: AuthApiService
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.minLength(4)),
    });
    this.darkModeService.initDarkModeSettings();
  }

  get username() {
    return this.loginForm.get("username");
  }

  get password() {
    return this.loginForm.get("password");
  }

  confirm() {
    this.authService.login(this.username?.value, this.password?.value).subscribe({
      next: (response) => {
        const token = response.token;
        const userData = atob(token.split(".")[1]);
        localStorage.setItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN, token);
        localStorage.setItem(LOCAL_STORAGE_KEYS.USERNAME, JSON.parse(userData).username);
        localStorage.setItem(LOCAL_STORAGE_KEYS.FIRST_NAME, response.first_name);
        localStorage.setItem(LOCAL_STORAGE_KEYS.LAST_NAME, response.last_name);
        this.router.navigate(["/"]);
      },
      error: (error) => {
        this.snackBar.open("Username or password not correct");
      },
    });
  }
}
