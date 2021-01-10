import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { AcercaDeComponent } from './page/acerca-de/acerca-de.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { GaleriaComponent } from './page/galeria/galeria.component';
import { CrudComponent } from './page/crud/crud.component';
import { ProfileComponent } from './page/profile/profile.component';
import { AccessGuard } from './service/acess-guard/access-guard.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AccessGuard] },
  { path: 'galeria', component: GaleriaComponent, canActivate:[AccessGuard] },
  { path: 'crud', component: CrudComponent, canActivate:[AccessGuard] },
  { path: 'profile', component: ProfileComponent, canActivate:[AccessGuard] },
  { path: '**', redirectTo: 'home' } // this needs to be after other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
