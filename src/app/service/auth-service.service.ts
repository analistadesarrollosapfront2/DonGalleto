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

}
