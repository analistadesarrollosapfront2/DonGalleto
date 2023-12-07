import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ControlVentasService {
  constructor(private http: HttpClient) {}

  getVentasData() {
    return[
    {
      "id_producto": 1,
      "nombre": "Galleta de chispas de chocolate",
      "cantidad": 5,
      "precio_unitario": 19
    },
    {
      "id_producto": 2,
      "nombre": "Galleta de chocolate",
      "cantidad": 10,
      "precio_unitario": 20
    },
    {
      "id_producto": 3,
      "nombre": "Galleta de naranja",
      "cantidad": 8,
      "precio_unitario": 21
    },
    {
      "id_producto": 4,
      "nombre": "Galleta de coco",
      "cantidad": 3,
      "precio_unitario": 22
    },
    {
      "id_producto": 5,
      "nombre": "Galleta de nuez",
      "cantidad": 7,
      "precio_unitario": 23
    },{
      "id_producto": 6,
      "nombre": "Muffin de arándanos",
      "cantidad": 4,
      "precio_unitario": 17
    },
    {
      "id_producto": 7,
      "nombre": "Tartaleta de fresa",
      "cantidad": 6,
      "precio_unitario": 18
    },
    {
      "id_producto": 8,
      "nombre": "Palmera de chocolate",
      "cantidad": 9,
      "precio_unitario": 16
    },
    {
      "id_producto": 9,
      "nombre": "Croissant de almendra",
      "cantidad": 5,
      "precio_unitario": 15
    },
    {
      "id_producto": 10,
      "nombre": "Barrita de avena y miel",
      "cantidad": 12,
      "precio_unitario": 14
    }
  ]
  }


  getVentas(): Observable<any[]> {
    return of(this.getVentasData());
  }

  // getVentas() {
  //   const url = 'http://localhost:3000/api/productos/ventas/';
  //   return this.http.get<any>(url);
  // }
}

