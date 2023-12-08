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
export class ControlProductosService {

  constructor(private http: HttpClient) { } 
  


  getProductos() {
    const url = 'http://localhost:3000/api/productos/listarProductos/';
    return this.http.get<any>(url);
  }

  getProducto(id:number) {
    const url = 'http://localhost:3000/api/productos/obtenerUnProducto/${id}';
    return this.http.get<any>(url);
  }

  postProducto(nombre:string){
    const url = 'http://localhost:3000/api/productos/insertarProducto/';
    const body = { nombre };
    return this.http.post<any>(url, body, httpOptions);
  }

  putProductos(id: number, nombre:string){
    const url = 'http://localhost:3000/api/productos/actualizarProducto/';
    const body = { id, nombre };
    return this.http.put<any>(url, body, httpOptions);
  }

  deleteProductos(id:number){
    const url = 'http://localhost:3000/api/productos/eliminarProducto/';
    const body = {id};
    return this.http.delete<any>(url, {body});
  }
}
