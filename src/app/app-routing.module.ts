import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { FilmViewComponent } from './film-view/film-view.component';
import { HistoryViewComponent } from './history-view/history-view.component';
import { PublicGuard } from './shared/public.guard';
import { FilmDetailsComponent } from './film-details/film-details.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: FilmViewComponent, },
      { path: 'history', component: HistoryViewComponent }
    ],
    canActivate: [AuthGuard]

  },
  { path: 'login', component: LoginComponent, canActivate: [PublicGuard]},
  { path: 'test', component: FilmDetailsComponent, canActivate: [PublicGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
