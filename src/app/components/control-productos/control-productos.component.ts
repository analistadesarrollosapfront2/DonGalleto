import { ControlProductosService } from 'src/app/service/control-productos/control-productos.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
// import * as jsPDF from 'jspdf';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-control-productos',
  templateUrl: './control-productos.component.html',
  styleUrls: ['./control-productos.component.scss'],
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

  constructor(private productoService: ControlProductosService) {}

  @ViewChild('materiasTable', { static: false }) materiasTable!: ElementRef;
  @ViewChild('mermasTable', { static: false }) mermasTable!: ElementRef;
  @ViewChild('productosTable', { static: false }) productosTable!: ElementRef;

  ngOnInit() {
    this.getMaterias();
    this.configureItemsMaterial();

    this.getMermas();
    this.configureItemsMermas();

    this.getProductos();
    this.configureItemsProducto();
  }

  configureItemsMaterial() {
    this.items = [
      {
        icon: 'pi pi-book',
        command: () => {
          console.log('Habrir Material ');
          this.generarPDF('materias');
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

  getMaterias() {
    this.productoService.getMaterias().subscribe(
      (response) => {
        console.log(response);
        this.materias = response;
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

  configureItemsMermas() {
    this.items2 = [
      {
        icon: 'pi pi-book',
        command: () => {
          console.log('Habrir Mermas');
          this.generarPDF('mermas');
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

  getMermas() {
    this.productoService.getMermas().subscribe(
      (response) => {
        console.log(response);
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

  configureItemsProducto() {
    this.items3 = [
      {
        icon: 'pi pi-book',
        command: () => {
          this.generarPDF('productos');
          console.log(' productos');
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

  getProductos() {
    this.productoService.getProductos().subscribe(
      (response) => {
        console.log(response);
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
        productos.nombre_producto
          .toLowerCase()
          .includes(this.value.toLowerCase())
      );
    } else {
      this.getProductos();
    }
  }

  generarPDF(nombreTabla: string) {
    let content: HTMLElement | null = document.getElementById(nombreTabla);

    if (content) {
      html2canvas(content).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');

        // Ajustamos el tamaño del PDF
        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'mm',
          format: 'a4',
        });

        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        // Agregamos la imagen al PDF
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

        // Descargamos el PDF
        pdf.save(`${nombreTabla}_reporte.pdf`);
      });
    }
  }
}
