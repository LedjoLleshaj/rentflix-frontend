import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { PublicGuard } from './shared/public.guard';

const routes: Routes = [
  { path: '', component: LayoutComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [PublicGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
