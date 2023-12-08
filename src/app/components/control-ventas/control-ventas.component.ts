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
  proveedores: any[] = [];
  selectedVentas: string[] = [];
  value: any | undefined;
  items: any[] = [];
  // Utilidades
  utilidades: any[] = [];
  value2: any | undefined;
  items2: any[] = [];
  constructor(
    private ventasService: ControlVentasService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getVentas();
    this.getProveedores();
    this.configureItemsV();
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
        console.log(response)
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

  formatearFecha(fecha: string){
    const fechaDate: Date = new Date(fecha);
    const opciones: object = { day: '2-digit', month: '2-digit', year: 'numeric' };

    // Formatear la fecha al formato de México
    const fechaFormateada = fechaDate.toLocaleDateString('es-MX', opciones);

    return fechaFormateada;
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





  getUtilidades() {
    this.ventasService.getUtilidades().subscribe(
      (response) => {
        this.utilidades = response;
      },
      (error) => {
        console.error('Error al obtener ventas:', error);
        this.utilidades = [];
      }
    );
  }

  getProveedores() {
    this.ventasService.getProveedores().subscribe(
      (response) => {
        this.proveedores = response;
      },
      (error) => {
        console.error('Error al obtener ventas:', error);
        this.proveedores = [];
      }
    );
  }
}
