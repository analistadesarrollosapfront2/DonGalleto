import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-recuperacion-login',
  templateUrl: './recuperacion-login.component.html',
  styleUrls: ['./recuperacion-login.component.scss'],
})
export class RecuperacionLoginComponent {
  constructor(private apiService: AuthServiceService) {}

  correo: string = '';
  correoValido: boolean = true;

  validarCorreo() {
    this.correoValido = this.correo.endsWith('@gmail.com');
  }

  recuperar() {
    if (!this.correoValido || !this.correo) {
      return;
    }
    this.apiService.enviarCorreoRecuperacion(this.correo).subscribe(
      (response) => {
        if (response.estatus !== 1) {

        } else {
        }
      },
      (error) => {
        console.error('Error al enviar correo de recuperación', error);

      }
    );
  }
}
