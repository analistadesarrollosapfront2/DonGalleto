import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-recuperacion-login',
  templateUrl: './recuperacion-login.component.html',
  styleUrls: ['./recuperacion-login.component.scss'],
})
export class RecuperacionLoginComponent {
  constructor(public apiService: AuthServiceService, public router: Router) {}

  correo: string = '';
  mensajeError: string = '';

  iniciarSesion() {
    // if (!this.correo ) {
    //   return;
    // }
    // this.apiService.iniciarSesion(this.correo).subscribe(
    //   (response) => {
    //     if (response.estatus != 1) {
    //     } else {
    //       sessionStorage.setItem('sesionIniciada', 'true');
    //       sessionStorage.setItem('usuario', response.data);
    //       this.router.navigate(['/login']);
    //     }
    //   },
    //   (error) => {
    //     console.error('Error al iniciar sesión', error);
    //     this.mensajeError = 'Ocurrió un error al iniciar sesión. Inténtalo de nuevo más tarde.';
    //   }
    // );
  }

  public get validarLogin() {
    if (this.correo != '' && this.correo.includes('@gmail.com')) return false;

    return true;
  }
}
