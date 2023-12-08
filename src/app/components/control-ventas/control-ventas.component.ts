import { Component, OnInit,ViewChild ,ElementRef} from '@angular/core';
import { MessageService } from 'primeng/api';
import { ControlVentasService } from 'src/app/service/control-ventas/control-ventas.service';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
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
  selectedProductos: string[] = [];
  selectedDiasVisita: string[] = [];
  value3: any | undefined;
  items3: any[] = [];
  constructor(
    private ventasService: ControlVentasService,
    private messageService: MessageService
  ) { }

  @ViewChild('ventasTable', { static: false }) ventasTable!: ElementRef;
  @ViewChild('utilidadesTable', { static: false }) utilidadesTable!: ElementRef;
  @ViewChild('proveedoresTable', { static: false }) proveedoresTable!: ElementRef;

  ngOnInit() {
    this.getVentas();
    this.getProveedores();
    this.configureItemsV();
    this.getUtilidades();
    this.configureItemsU();
    this.configureItemsProv();
  }

  configureItemsV() {
    this.items = [
      {
        icon: 'pi pi-book',
        command: () => {
          this.generarPDF('ventas');
          this.generarExcel('ventas');
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



  configureItemsU() {
    this.items2 = [
      {
        icon: 'pi pi-book',
        command: () => {
          this.generarPDF('utilidades');
          this.generarExcel('utilidades');
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


  configureItemsProv() {
    this.items3 = [
      {
        icon: 'pi pi-book',
        command: () => {
          this.generarPDF('proveedores');
          this.generarExcel('proveedores');
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
  guardar() {
    console.log('Datos guardados:', this.proveedor, this.nombre, this.telefono, this.email, this.colonia, this.calle, this.numero, this.selectedProductos, this.selectedDiasVisita);
  }

  modificar() {

  }


  generarPDF(nombreTabla: string) {
    let content: HTMLElement | null = document.getElementById(nombreTabla);

    if (content) {
      const paginador = content.querySelector('.paginador');
      if (paginador && paginador instanceof HTMLElement) {
        paginador.style.display = 'none';
      }

      html2canvas(content).then((canvas) => {
        if (paginador && paginador instanceof HTMLElement) {
          paginador.style.display = 'block';
        }

        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'mm',
          format: 'a4',
        });

        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, 'png', 0, 0, pdfWidth, pdfHeight);

        pdf.save(`${nombreTabla}_reporte.pdf`);
      });
    }
  }

  generarExcel(nombreTabla: string) {
    let content: HTMLElement | null = document.getElementById(nombreTabla);

    if (content) {
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.table_to_sheet(content);

      XLSX.utils.book_append_sheet(wb, ws, 'Tabla');

      const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
      const buf = new ArrayBuffer(wbout.length);
      const view = new Uint8Array(buf);

      for (let i = 0; i < wbout.length; i++) {
        view[i] = wbout.charCodeAt(i) & 0xff;
      }

      const blob = new Blob([buf], { type: 'application/octet-stream' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `${nombreTabla}_reporte.xlsx`;
      link.click();
    }
  }


}
