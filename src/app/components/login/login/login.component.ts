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

        if (response.estatus != 1) {
          this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: response.mensaje, life: 3000 });
        } else {
          sessionStorage.setItem('sesionIniciada', 'true');
          sessionStorage.setItem('usuario', response.data);
          this.router.navigate(['/home']);
        }

      },
      (error) => {
        console.error('Error al iniciar sesión', error);
        this.mensajeError = 'Ocurrió un error al iniciar sesión. Inténtalo de nuevo más tarde.';
      }
    );
  }



  public get validarLogin(){
    if(
      (this.correo != "" &&
      this.correo.includes("@gmail.com")
      ) &&
      this.contrasenia != ""
      )return false;

    return true;
  }
}
