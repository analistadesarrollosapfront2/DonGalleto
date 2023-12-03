import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Max-Disk-Usage': '10mb', // Establece el límite de carga aquí
  }),
  timeout: 20000,
};

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private http: HttpClient) { }


  // iniciarSesion(email: string, contrasena: string): Observable<any> {
  //   const url = 'http://localhost:3000/api/login/';
  //   const body = { email, contrasena };
  //   return this.http.post<any>(url, body);
  // }

  iniciarSesion(email: string, contrasenia: string): Observable<any> {
    const usuarios = [
      { email: 'cris@gmail.com', contrasenia: '123' },
    ];
    const usuarioEncontrado = usuarios.find(user => user.email === email && user.contrasenia === contrasenia);
    if (usuarioEncontrado) {
      return of({ status: 1, data: usuarioEncontrado, message: 'Inicio de sesión exitoso' });
    } else {
      // Simular una respuesta de credenciales incorrectas
      return of({ status: 0, message: 'Credenciales incorrectas' });
    }
  }
}







