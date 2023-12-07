import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-registro-login',
  templateUrl: './registro-login.component.html',
  styleUrls: ['./registro-login.component.scss'],
})
export class RegistroLoginComponent {
  constructor(private apiService: AuthServiceService, private router: Router) {}


  correo: string = '';
  contrasenia: string = '';
  confirmarContrasenia: string = '';
  mensajeError: string = '';
  usuario: string = '';

  registro() {
    if (!this.correo || !this.contrasenia || this.contrasenia !== this.confirmarContrasenia) {

      return;
    }

    this.apiService.registrar(this.correo, this.contrasenia).subscribe(
      (response) => {
        if (response.estatus != 1) {

        } else {
          sessionStorage.setItem('sesionIniciada', 'true');
          sessionStorage.setItem('usuario', response.data);
          this.router.navigate(['/login']);
        }
      },
      (error) => {
        console.error('Error al registrarse', error);
        this.mensajeError =
          'Ocurrió un error al registrarse. Inténtalo de nuevo más tarde.';
      }
    );
  }

  public get validarLogin(): boolean {

    return !(
      this.correo !== '' &&
      this.correo.includes('@gmail.com') &&
      this.contrasenia !== '' &&
      this.confirmarContrasenia !== '' &&
      this.contrasenia === this.confirmarContrasenia
    );
  }
}
