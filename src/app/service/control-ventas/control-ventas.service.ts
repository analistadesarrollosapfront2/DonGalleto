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

  getProveedoresData(){
    return [
      {
        "id": "1",
        "nombre_proveedor": "Proveedor A",
        "direccion": "Calle A, Ciudad",
        "telefono": "111-111-1111",
        "correo_electronico": "proveedora@ejemplo.com",
        "lista_productos": [
          {"producto_id": "pa1", "nombre_producto": "Producto A1", "precio": 19.99},
          {"producto_id": "pa2", "nombre_producto": "Producto A2", "precio": 29.99},
          {"producto_id": "pa3", "nombre_producto": "Producto A3", "precio": 14.99}
        ],
        "dias_visita": ["Lunes", "Miércoles", "Viernes"]
      },
      {
        "id": "2",
        "nombre_proveedor": "Proveedor B",
        "direccion": "Calle B, Ciudad",
        "telefono": "222-222-2222",
        "correo_electronico": "proveedorb@ejemplo.com",
        "lista_productos": [
          {"producto_id": "pb1", "nombre_producto": "Producto B1", "precio": 24.99},
          {"producto_id": "pb2", "nombre_producto": "Producto B2", "precio": 34.99},
          {"producto_id": "pb3", "nombre_producto": "Producto B3", "precio": 17.99}
        ],
        "dias_visita": ["Martes", "Jueves", "Sábado"]
      },
      {
        "id": "3",
        "nombre_proveedor": "Proveedor C",
        "direccion": "Calle C, Ciudad",
        "telefono": "333-333-3333",
        "correo_electronico": "proveedorc@ejemplo.com",
        "lista_productos": [
          {"producto_id": "pc1", "nombre_producto": "Producto C1", "precio": 21.99},
          {"producto_id": "pc2", "nombre_producto": "Producto C2", "precio": 31.99},
          {"producto_id": "pc3", "nombre_producto": "Producto C3", "precio": 15.99}
        ],
        "dias_visita": ["Lunes", "Miércoles", "Viernes"]
      },
      {
        "id": "4",
        "nombre_proveedor": "Proveedor D",
        "direccion": "Calle D, Ciudad",
        "telefono": "444-444-4444",
        "correo_electronico": "proveedord@ejemplo.com",
        "lista_productos": [
          {"producto_id": "pd1", "nombre_producto": "Producto D1", "precio": 18.99},
          {"producto_id": "pd2", "nombre_producto": "Producto D2", "precio": 28.99},
          {"producto_id": "pd3", "nombre_producto": "Producto D3", "precio": 12.99}
        ],
        "dias_visita": ["Martes", "Jueves", "Sábado"]
      },
      {
        "id": "5",
        "nombre_proveedor": "Proveedor E",
        "direccion": "Calle E, Ciudad",
        "telefono": "555-555-5555",
        "correo_electronico": "proveedore@ejemplo.com",
        "lista_productos": [
          {"producto_id": "pe1", "nombre_producto": "Producto E1", "precio": 23.99},
          {"producto_id": "pe2", "nombre_producto": "Producto E2", "precio": 33.99},
          {"producto_id": "pe3", "nombre_producto": "Producto E3", "precio": 16.99}
        ],
        "dias_visita": ["Lunes", "Miércoles", "Viernes"]
      },
      {
        "id": "6",
        "nombre_proveedor": "Proveedor F",
        "direccion": "Calle F, Ciudad",
        "telefono": "666-666-6666",
        "correo_electronico": "proveedorf@ejemplo.com",
        "lista_productos": [
          {"producto_id": "pf1", "nombre_producto": "Producto F1", "precio": 22.99},
          {"producto_id": "pf2", "nombre_producto": "Producto F2", "precio": 32.99},
          {"producto_id": "pf3", "nombre_producto": "Producto F3", "precio": 14.99}
        ],
        "dias_visita": ["Martes", "Jueves", "Sábado"]
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

  getProveedores(): Observable<any[]>{
    return of(this.getProveedoresData());
  }

  // getUtilidades() {
  //   const url = 'http://localhost:3000/api/productos/utilidades/';
  //   return this.http.get<any>(url);
  // }
}

