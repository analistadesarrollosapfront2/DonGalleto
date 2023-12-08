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


  ngOnInit() {
    this.getProductos();
    this.configureItemsP();
  }

  configureItemsP() {
    this.items = [
      {
        icon: 'pi pi-book',
        command: () => {
          console.log('Habrir ');
        },
        tooltipOptions: {
          tooltipLabel: 'Reporte',
        },
      },
      {
        icon: 'pi pi-chart-bar',
        command: () => { },
        tooltipOptions: {
          tooltipLabel: 'Grafica de Barras',
        },
      },
      {
        icon: 'pi pi-chart-pie  custom-speed-dial-icon ',
        command: () => { },
        tooltipOptions: {
          tooltipLabel: 'Grafica de Pastel',
        },
      },
    ];
  }

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

  applyFilter() {
    if (this.value) {
      this.productos = this.productos.filter((venta: any) =>
      venta.nombre.toLowerCase().includes(this.value.toLowerCase())
    );
    
    } else {
      this.getProductos();
    }
  }
  
}
