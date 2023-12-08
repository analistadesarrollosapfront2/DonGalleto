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
  


  // getProductos() {
  //   const url = 'http://localhost:3000/api/productos/listarProductos/';
  //   return this.http.get<any>(url);
  // }

//    materiasPrimasData (){
//     return [
//     {
//       "id": 1,
//       "nombre": "Pan",
//       "costo": 10.5,
//       "stock": 50,
//       "nombre_unidad": "Unidad A",
//       "fecha_modificacion": "2023-12-01"
//     },
//     {
//       "id": 2,
//       "nombre": "Azucar",
//       "costo": 15.2,
//       "stock": 30,
//       "nombre_unidad": "Unidad B",
//       "fecha_modificacion": "2023-12-03"
//     },
//     {
//       "id": 3,
//       "nombre": "Trigo",
//       "costo": 8.7,
//       "stock": 80,
//       "nombre_unidad": "Unidad C",
//       "fecha_modificacion": "2023-11-28"
//     },
//   ];
// }


productosData (){
  return [
  {
    "id_producto": 1,
    "nombre_producto": "galeta",
    "nombre_unidad": "Unidad A",
    "precio": 15.5
  },
  {
    "id_producto": 2,
    "nombre_producto": "pastel",
    "nombre_unidad": "Unidad B",
    "precio": 20.0
  },
  {
    "id_producto": 3,
    "nombre_producto": "licuado ",
    "nombre_unidad": "Unidad C",
    "precio": 10.25
  },
  {
    "id_producto": 4,
    "nombre_producto": "tarta ",
    "nombre_unidad": "Unidad D",
    "precio": 18.75
  }
]
}

 mermasData() {
  return [
    {
      "id_producto": 1,
      "nombre": "Galleta de Chocolate",
      "cantidad": 10,
      "nombre_unidad": "Unidad A",
      "precio_unitario": "Dañado"
    },
    {
      "id_producto": 2,
      "nombre": "Galleta de Vainilla",
      "cantidad": 5,
      "nombre_unidad": "Unidad B",
      "precio_unitario": "Caducado"
    },
    {
      "id_producto": 3,
      "nombre": "Galleta de Limón",
      "cantidad": 8,
      "nombre_unidad": "Unidad C",
      "precio_unitario": "Defectuoso"
    },
    {
      "id_producto": 4,
      "nombre": "Galleta de Nuez",
      "cantidad": 12,
      "nombre_unidad": "Unidad D",
      "precio_unitario": "Error de producción"
    }
  ];
}




// getMermas(): Observable<any[]> {
//   return of(this.mermasData());
// }

// getMaterias(): Observable<any[]> {
//   return of(this.materiasPrimasData());
// }

getProductos(): Observable<any[]> {
  const url = 'http://localhost:3000/api/productos/listarProductos';
  return this.http.get<any>(url);
}

getProducto(id:number, idUnidad:number) {
  const url = 'http://localhost:3000/api/productos/obtenerUnProducto/'+id+'/'+idUnidad;
  return this.http.get<any>(url);
}

postProducto(nombre:string){
  const url = 'http://localhost:3000/api/productos/insertarProducto/';
  const body = { nombre };
  return this.http.post<any>(url, body, httpOptions);
}

putProductos(id: number, nombre:string, idUnidadEditar: number){
  const url = 'http://localhost:3000/api/productos/actualizarProducto/';
  const body = { id, nombre, idUnidadEditar};
  return this.http.put<any>(url, body, httpOptions);
}

deleteProductos(id:number){
  const url = 'http://localhost:3000/api/productos/eliminarProducto/';
  const body = {id};
  return this.http.delete<any>(url, {body});
}

  getMermas() {
    const url = 'http://localhost:3000/api/mermas/listarMermas/';
    return this.http.get<any>(url);
  }

  getMaterias() {
    const url = 'http://localhost:3000/api/materiasPrimas/listarMateriasPrimas';
    return this.http.get<any>(url);
  }

  deleteMaterias(id:number){
    const url = 'http://localhost:3000/api/materiasPrimas/eliminarMateriaPrima/';
    const body = {id};
    return this.http.delete<any>(url, {body});
  }

  getUnidades(){
    const url = 'http://localhost:3000/api/productos/listarUnidades/';
    return this.http.get<any>(url);
  }
}
