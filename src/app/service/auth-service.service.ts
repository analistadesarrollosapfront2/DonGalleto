import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

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

  
  retirar(datos: any): Observable<any> {    
    const url = 'http://localhost:3000/api/movimientos/';
    return this.http.post<any>(url, datos);
  }



  iniciarSesion(usuario: string, contrasena: string): Observable<any> {
    const url = 'http://localhost:3000/';
    const body = { usuario, contrasena };
    return this.http.post<any>(url, body);
  }
}
