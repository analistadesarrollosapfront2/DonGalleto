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


  getUtilidadesData(){
    return[
      {
        "id": 1,
        "monto_venta": 1500,
        "monto_merma": 200,
        "monto_materias_primas": 800,
        "monto_gastos_servicios": 300,
        "utilidades_rentabilidad": 200
      },
      {
        "id": 2,
        "monto_venta": 1800,
        "monto_merma": 150,
        "monto_materias_primas": 900,
        "monto_gastos_servicios": 400,
        "utilidades_rentabilidad": 250
      },
      {
        "id": 3,
        "monto_venta": 2000,
        "monto_merma": 250,
        "monto_materias_primas": 1000,
        "monto_gastos_servicios": 450,
        "utilidades_rentabilidad": 300
      },
      {
        "id": 4,
        "monto_venta": 2200,
        "monto_merma": 180,
        "monto_materias_primas": 1200,
        "monto_gastos_servicios": 500,
        "utilidades_rentabilidad": 280
      },
      {
        "id": 5,
        "monto_venta": 1900,
        "monto_merma": 210,
        "monto_materias_primas": 950,
        "monto_gastos_servicios": 420,
        "utilidades_rentabilidad": 220
      },
      {
        "id": 6,
        "monto_venta": 2100,
        "monto_merma": 190,
        "monto_materias_primas": 1050,
        "monto_gastos_servicios": 480,
        "utilidades_rentabilidad": 270
      },
      {
        "id": 7,
        "monto_venta": 2400,
        "monto_merma": 220,
        "monto_materias_primas": 1300,
        "monto_gastos_servicios": 550,
        "utilidades_rentabilidad": 320
      },
      {
        "id": 8,
        "monto_venta": 2300,
        "monto_merma": 240,
        "monto_materias_primas": 1150,
        "monto_gastos_servicios": 530,
        "utilidades_rentabilidad": 290
      },
      {
        "id": 9,
        "monto_venta": 1950,
        "monto_merma": 180,
        "monto_materias_primas": 980,
        "monto_gastos_servicios": 410,
        "utilidades_rentabilidad": 230
      },
      {
        "id": 10,
        "monto_venta": 2050,
        "monto_merma": 200,
        "monto_materias_primas": 1000,
        "monto_gastos_servicios": 430,
        "utilidades_rentabilidad": 240
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


  getUtilidades(): Observable<any[]> {
    return of(this.getUtilidadesData());
  }

  // getUtilidades() {
  //   const url = 'http://localhost:3000/api/productos/utilidades/';
  //   return this.http.get<any>(url);
  // }
}

