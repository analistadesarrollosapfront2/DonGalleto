import { Component, AfterViewInit, Renderer2 } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { Router } from '@angular/router'; // Importa Router desde '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {

  constructor(private renderer: Renderer2, private apiService: AuthServiceService, private router: Router) {}

  ngAfterViewInit() {
    // Agrega la clase "show" para activar la animación
    this.renderer.addClass(document.querySelector('.login-container'), 'show');
  }

  usuario: string = '';
  contrasenia: string = '';
  mensajeError: string = '';

 iniciarSesion() {
  if (this.usuario && this.contrasenia) {
    this.apiService.iniciarSesion(this.usuario, this.contrasenia).subscribe(
      (response: any) => {
        if (response) {
          sessionStorage.setItem('sesionIniciada', response);
          this.router.navigate(['/home']);
        } else {
          this.mensajeError = 'Credenciales incorrectas. Inténtalo de nuevo.';
          sessionStorage.setItem('sesionIniciada', 'false');
        }
      },
      (error: any) => {
        console.error('Error al iniciar sesión', error);
        this.mensajeError = 'Ocurrió un error al iniciar sesión. Inténtalo de nuevo más tarde.';
      }
    );
  }
}


}
