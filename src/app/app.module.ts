import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { CustomMaterialModule } from './material.modules';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AuthInterceptor } from './shared/authconfig.interceptor';
// import { FilmService } from './shared/film.service';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { GraphQLModule } from './graphql.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AppComponent, LayoutComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    MatListModule,
    MatGridListModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    MatIconModule,
    MatSnackBarModule,
    GraphQLModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
