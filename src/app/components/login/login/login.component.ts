// import { Component } from '@angular/core';
import { Component, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Agrega la clase "show" para activar la animación
    this.renderer.addClass(document.querySelector('.login-container'), 'show');
  }

  username: string = '';
  password: string = '';
  login (){
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
  }


}

