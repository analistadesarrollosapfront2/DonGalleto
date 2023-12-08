import { ControlProductosService } from 'src/app/service/control-productos/control-productos.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
// import * as jsPDF from 'jspdf';
// import { jsPDF } from 'jspdf';
// import html2canvas from 'html2canvas';
// import * as XLSX from 'xlsx';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

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
  visible : boolean = false;
  visible2 : boolean = false;
  visible3 : boolean = false;
  visible4 : boolean = false;
  visible5 : boolean = false;
  visible6 : boolean = false;
  visibleConfirm : boolean = false;
  nombre: string = "";
  nombreEditar: string = "";
  idUnidadEditar : number = 0;
  idEditar: number = 0;
  // MateriaPrima
  value2: any | undefined;
  items2: any[] = [];
  materias: any[] = [];
  nombre_merma : string ="";
  costo : number = 0;
  stock : number = 0;
  // Mermas
  value3: any | undefined;
  items3: any[] = [];
  mermas: any[] = [];
  monto_mermado : number = 0;
  causa : string = "";  

  nodes: any[] = [];

  selectedNodes: any;

  constructor(
    private productoService: ControlProductosService, private messageService: MessageService, private route: ActivatedRoute
  ) { }

  @ViewChild('materiasTable', { static: false }) materiasTable!: ElementRef;
  @ViewChild('mermasTable', { static: false }) mermasTable!: ElementRef;
  @ViewChild('productosTable', { static: false }) productosTable!: ElementRef;

  ngOnInit() {
    this.getMaterias();
    // this.configureItemsMaterial();

    this.getMermas();
    this.configureItemsMermas();

    this.getProductos();
    // this.configureItemsProducto();
  }

  configureItemsP() {
    this.items3 = [
      {
        icon: 'pi pi-book',
        command: () => {
          console.log('Habrir ');
          this.visible5 = true;
        },
        tooltipOptions: {
          tooltipLabel: 'Agregar',
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
        command: () => { },
        tooltipOptions: {
          tooltipLabel: 'Grafica de Pastel',
        },
      },
    ];
  }

  showModal(){
    this.visible = true;
  }

  hidenModal(){
    this.visible = false;
  }

  showDialog(){
    this.visibleConfirm = true;
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
          this.visible3 = true;
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
          this.showModal();
        },
        tooltipOptions: {
          tooltipLabel: 'Agergar',
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

  registrarProducto(){
    this.productoService.postProducto(this.nombre).subscribe(
      (response) => {
        console.log(response)
        this.getProductos();
        this.hidenModal();
      },
      (error) => {
        console.error('Error al obtener ventas:', error);
      }
    ); 
  }

  editProducto(id:number, idUnidad:number){
    console.log(id)
   // suponiendo que el ID está en la ruta
      this.productoService.getProducto(id, idUnidad).subscribe(
        (response) => {
          console.log(response);
          this.nombreEditar = response[0].nombre_producto;
          this.idEditar = response[0].id_producto;
          this.idUnidadEditar = response[0].id_unidad;
          this.visible2 = true;
        },
        (error) => {
          console.error('Error al obtener ventas:', error);
        }
      );
  }

  editarProducto(){
    this.productoService.putProductos(this.idEditar, this.nombreEditar, this.idUnidadEditar).subscribe(
      (response) => {
        console.log(response);
        this.nombreEditar = "";
        this.idUnidadEditar = 0;
        this.idEditar = 0;
        this.visible2 = false;
        this.getProductos();
      },
      (error) => {
        console.error('Error al obtener ventas:', error);
      }
    );
  }

  eliminarProducto(id:number){
    this.productoService.deleteProductos(id).subscribe(
      (response) => {
        console.log(response)
        this.getProductos();
        this.hidenModal();
      },
      (error) => {
        console.error('Error al obtener ventas:', error);
      }
    );
  }

  editMerma(id:number){

  }
  editarMerma(){}

  eliminarMerma(id:number){

  }



  registrarMateria(){
    
  }

  editMateria(id:number){

  }
  editarMateria(){}

  eliminarMateria(id:number){
    this.productoService.deleteMaterias(id).subscribe(
      (response) => {
        console.log(response)
        this.getMaterias();
        this.visible5;
      },
      (error) => {
        console.error('Error al obtener ventas:', error);
      }
    );
  }

}
