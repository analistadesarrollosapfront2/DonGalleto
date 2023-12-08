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
// Mermas
value3: any | undefined;
items3: any[] = [];
mermas: any[] = [];

  constructor(
    private productoService: ControlProductosService,
  ) { }


  ngOnInit() {
    this.getProductos();
    this.configureItemsP();
    this.getMaterias();
    this.configureItemsMP();

    this.getMermas();
    this.configureItemsM();
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
    this.items2 = [
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
        this.materias = [];
      }
    );
  }

  applyFilter2() {
    if (this.value2) {
      this.materias = this.materias.filter((materia: any) =>
        materia.nombre.toLowerCase().includes(this.value2.toLowerCase())
      );
    } else {
      this.getMaterias();
    }
  }



  configureItemsM() {
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

  getMermas() {
    this.productoService.getMermas().subscribe(
      (response) => {
        console.log(response)
        this.mermas = response;
      },
      (error) => {
        console.error('Error al obtener los productos:', error);
        this.mermas = [];
      }
    );
  }

  applyFilter3() {
    if (this.value) {
      this.mermas = this.mermas.filter((mermas: any) =>
      mermas.nombre.toLowerCase().includes(this.value.toLowerCase())
    );

    } else {
      this.getMermas();
    }
  }

}
