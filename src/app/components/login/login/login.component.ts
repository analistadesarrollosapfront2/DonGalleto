import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent {

  constructor(private apiService: AuthServiceService, private router: Router, private messageService: MessageService) { }

  correo: string = '';
  contrasenia: string = '';
  mensajeError: string = '';
  usuario: string = '';

  iniciarSesion() {
    if (!this.correo || !this.contrasenia) {
      this.messageService.clear();
      this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: 'Por favor, completa todos los campos.' });
      return;
    }
    this.apiService.iniciarSesion(this.correo, this.contrasenia).subscribe(
      (response) => {
        if (response) {
          console.log(response);
          if (response.status !== 1) {
            this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: response.message, life: 3000 });
          } else {
            this.usuario = this.correo;
            sessionStorage.setItem('sesionIniciada', 'true');
            sessionStorage.setItem('usuario', this.usuario);
            this.router.navigate(['/home']);
          }
        } else {
          this.messageService.clear();
          this.mensajeError = 'Credenciales incorrectas. Inténtalo de nuevo.';
          sessionStorage.setItem('sesionIniciada', 'false');
        }
      },
      (error) => {
        console.error('Error al iniciar sesión', error);
        this.mensajeError = 'Ocurrió un error al iniciar sesión. Inténtalo de nuevo más tarde.';
      }
    );
  }

  showToast1() {
    this.messageService.clear();
    this.messageService.add({ key: 'toast', severity: 'success', summary: `¡Bienvenido!`, detail: `Hola, ${this.usuario}` });
  }
}
