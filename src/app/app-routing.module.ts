import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RegistroLoginComponent } from './components/login/registro-login/registro-login.component';
import { RecuperacionLoginComponent } from './components/login/recuperacion-login/recuperacion-login.component';
import { ControlProductosComponent } from './components/control-productos/control-productos.component';
import { ControlVentasComponent } from './components/control-ventas/control-ventas.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: SidenavComponent },
  { path: 'accesoLogin', component: RegistroLoginComponent },
  { path: 'recuperacionLogin', component: RecuperacionLoginComponent },
  { path: 'controlVentas', component: ControlVentasComponent },
  { path: 'controlProductos', component: ControlProductosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
