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

  iniciarSesion(correo: string, contrasenia: string): Observable<any> {
    const url = 'http://localhost:3000/api/usuarios/login/';
    const body = { correo, contrasenia };
    return this.http.post<any>(url, body);
  }

  obtenerProductos(): Observable<any> {
    const url = 'http://localhost:3000/api/productos/listarProductos/';
    return this.http.get<any>(url);
  }

  registrarVenta(array: any): Observable<any> {
    const url = 'http://localhost:3000/api/productos/registrarventa/';
    return this.http.post<any>(url, array, httpOptions);
  }

  registrar(correo: string, contrasenia: string): Observable<any> {
    const url = 'http://localhost:3000/api/usuarios/registrar/';
    const body = { correo, contrasenia };
    console.log('Datos enviados para registro:', body);
    return this.http.post<any>(url, body, httpOptions);
  }

  enviarCorreoRecuperacion(correo: string): Observable<any> {
    const url = 'http://localhost:3000/api/usuarios/recuperar/';
    const body = { correo };
    console.log('Correo enviado para recuperación:', body);
    return this.http.post<any>(url, body, httpOptions);
  }
}
