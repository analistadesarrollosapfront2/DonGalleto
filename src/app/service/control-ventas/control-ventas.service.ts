import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ControlVentasService {
  constructor(private http: HttpClient) {}

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

  getVentas() {
    const url = 'http://localhost:3000/api/productos/ventas/';
    return this.http.get<any>(url);
  }


  getUtilidades(): Observable<any[]> {
    return of(this.getUtilidadesData());
  }

  // getUtilidades() {
  //   const url = 'http://localhost:3000/api/productos/utilidades/';
  //   return this.http.get<any>(url);
  // }
}

