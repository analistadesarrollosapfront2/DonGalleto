import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ControlVentasService } from 'src/app/service/control-ventas/control-ventas.service';

@Component({
  selector: 'app-control-ventas',
  templateUrl: './control-ventas.component.html',
  styleUrls: ['./control-ventas.component.scss'],
})
export class ControlVentasComponent implements OnInit {
  // Ventas
  ventas: any[] = [];
  selectedVentas: string[] = [];
  value: any | undefined;
  items: any[] = [];
  // Utilidades
  utilidades: any[] = [];
  value2: any | undefined;
  items2: any[] = [];
  //Proveedor
  proveedor: string = ''; 
  nombre: string = '';
  telefono: string = '';
  email: string = '';
  colonia: string = '';
  calle: string = '';
  numero: string = '';
  productos: string = '';
  diasVisita: string = '';
  productosOptions: string[] = ['Producto 1', 'Producto 2', 'Producto 3']; 
  diasVisitaOptions: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']; 

  constructor(
    private ventasService: ControlVentasService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getVentas();
    this.configureItemsV();
    this.getUtilidades();
    this.configureItemsU();
  }

  configureItemsV() {
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
        command: () => {},
        tooltipOptions: {
          tooltipLabel: 'Grafica de Barras',
        },
      },
      {
        icon: 'pi pi-chart-pie  custom-speed-dial-icon ',
        command: () => {},
        tooltipOptions: {
          tooltipLabel: 'Grafica de Pastel',
        },
      },
    ];
  }

  getVentas() {
    this.ventasService.getVentas().subscribe(
      (response) => {
        this.ventas = response;
      },
      (error) => {
        console.error('Error al obtener ventas:', error);
        this.ventas = [];
      }
    );
  }

  calculateSubtotal(venta: any): number {
    const subtotal = venta.cantidad * venta.precio_unitario;
    return subtotal;
  }

  calculateTotal(venta: any): number {
    const subtotal = this.calculateSubtotal(venta);
    const iva = subtotal * 0.16;
    const total = subtotal + iva;
    return total;
  }

  applyFilter() {
    if (this.value) {
      this.ventas = this.ventas.filter((venta: any) =>
        venta.nombre.toLowerCase().includes(this.value.toLowerCase())
      );
    } else {
      this.getVentas();
    }
  }



  configureItemsU() {
    this.items2 = [
      {
        icon: 'pi pi-book',
        command: () => {
          console.log('Habrir Utilidades ');
        },
        tooltipOptions: {
          tooltipLabel: 'Reporte',
        },
      },
      {
        icon: 'pi pi-chart-bar',
        command: () => {},
        tooltipOptions: {
          tooltipLabel: 'Grafica de Barras',
        },
      },
      {
        icon: 'pi pi-chart-pie  custom-speed-dial-icon ',
        command: () => {},
        tooltipOptions: {
          tooltipLabel: 'Grafica de Pastel',
        },
      },
    ];
  }


  getUtilidades() {
    this.ventasService.getUtilidades().subscribe(
      (response) => {
        console.log('Datos de utilidades:', response);
        this.utilidades = response;
      },
      (error) => {
        console.error('Error al obtener utilidades:', error);
        this.utilidades = [];
      }
    );
  }




  guardar() {
    // Aquí puedes implementar la lógica para guardar los datos
    console.log('Datos guardados:', this.proveedor, this.nombre, this.telefono, this.email, this.colonia, this.calle, this.numero, this.productos, this.diasVisita);
  }

  // Función para modificar los datos del formulario
  modificar() {
    // Implementa la lógica para modificar los datos si es necesario
  }
  
}
