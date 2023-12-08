import { Component } from '@angular/core';
import { ControlProductosService } from 'src/app/service/control-productos/control-productos.service';

@Component({
  selector: 'app-control-productos',
  templateUrl: './control-productos.component.html',
  styleUrls: ['./control-productos.component.scss']
})
export class ControlProductosComponent {
  value: any | undefined;
  items: any[] = [];
  productos: any[] = [];

  constructor(
    private productoService: ControlProductosService,
  ) { }


  getProductos() {
    this.productoService.getProductos().subscribe(
      (response) => {
        console.log(response)
        this.productos = response;
      },
      (error) => {
        console.error('Error al obtener ventas:', error);
        this.productos = [];
      }
    );
  }
}
