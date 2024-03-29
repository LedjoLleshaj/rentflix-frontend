import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from "./login/login.component";
import { CustomMaterialModule } from "./material.modules";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";

import { HttpClientModule } from "@angular/common/http";

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { LayoutComponent } from "./layout/layout.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { GraphQLModule } from "./graphql.module";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { FilmViewComponent } from "./film-view/film-view.component";
import { HistoryViewComponent } from "./history-view/history-view.component";
import { FilmTableComponent } from "./shared/components/film-table/film-table.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatMenuModule } from "@angular/material/menu";
import { FilmDetailsDialogComponent } from "./shared/components/film-details-dialog/film-details-dialog.component";
import { MatDialogContent, MatDialogModule } from "@angular/material/dialog";
import { MatChipsModule } from "@angular/material/chips";
import { ChipsComponent } from "./shared/components/chips/chips.component";
import { HistoryTableComponent } from "./shared/components/history-table/history-table.component";
import { StatCardComponent } from "./shared/components/stat-card/stat-card.component";
import { MatStepperModule } from "@angular/material/stepper";
import { RentalDetailsDialogComponent } from "./shared/components/rental-details-dialog/rental-details-dialog.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    FilmViewComponent,
    HistoryViewComponent,
    FilmDetailsDialogComponent,
    RentalDetailsDialogComponent,
  ],
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
    FormsModule,
    MatPaginatorModule,
    FilmTableComponent,
    MatMenuModule,
    MatDialogModule,
    MatChipsModule,
    ChipsComponent,
    HistoryTableComponent,
    StatCardComponent,
    MatStepperModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
