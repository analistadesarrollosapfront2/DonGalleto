import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlProductosService {

  constructor(private http: HttpClient) { }  


  getProductos() {
    const url = 'http://localhost:3000/api/productos/listarProductos/';
    return this.http.get<any>(url);
  }
}
