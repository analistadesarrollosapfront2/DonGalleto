import { Component } from '@angular/core';
import { ControlProductosService } from 'src/app/service/control-productos/control-productos.service';

@Component({
  selector: 'app-control-productos',
  templateUrl: './control-productos.component.html',
  styleUrls: ['./control-productos.component.scss']
})
export class ControlProductosComponent {
  // Productos
  value: any | undefined;
  items: any[] = [];
  productos: any[] = [];
// MateriaPrima
value2: any | undefined;
items2: any[] = [];
materias: any[] = [];

  constructor(
    private productoService: ControlProductosService,
  ) { }


  ngOnInit() {
    this.getProductos();
    this.configureItemsP();
    this.getMaterias();
    this.configureItemsMP();
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
        console.error('Error al obtener los productos:', error);
        this.productos = [];
      }
    );
  }

  applyFilter() {
    if (this.value) {
      this.productos = this.productos.filter((productos: any) =>
      productos.nombre_producto.toLowerCase().includes(this.value.toLowerCase())
    );
    
    } else {
      this.getProductos();
    }
  }
  








  
  configureItemsMP() {
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

  getMaterias() {
    this.productoService.getMaterias().subscribe(
      (response) => {
        console.log(response)
        this.materias = response;
        this.configureItemsMP();
      },
      (error) => {
        console.error('Error al obtener las materias primas:', error);
        this.productos = [];
      }
    );
  }

  applyFilter2() {
    if (this.value) {
      this.materias = this.materias.filter((venta: any) =>
      venta.nombre.toLowerCase().includes(this.value.toLowerCase())
    );
    
    } else {
      this.getMaterias();
    }
  }
}
