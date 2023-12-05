import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AccesoLoginComponent } from './components/login/acceso-login/acceso-login/acceso-login.component';
import { RecuperacionLoginComponent } from './components/login/recuperacion-login/recuperacion-login/recuperacion-login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: SidenavComponent },
  { path: 'accesoLogin', component: AccesoLoginComponent },
  { path: 'recuperacionLogin', component: RecuperacionLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
