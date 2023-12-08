import { Component } from '@angular/core';
import { ControlProductosService } from 'src/app/service/control-productos/control-productos.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-control-productos',
  templateUrl: './control-productos.component.html',
  styleUrls: ['./control-productos.component.scss']
})
export class ControlProductosComponent {
  value: any | undefined;
  items: any[] = [];
  productos: any[] = [];
  visible2 : boolean = false;
  visible3 : boolean = false;
  nombre: string = "";
  nombreEditar: string = "";

  constructor(
    private productoService: ControlProductosService, private messageService: MessageService
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
          this.showDialog()
        },
        tooltipOptions: {
          tooltipLabel: 'Agregar',
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

  showDialog(){
    this.visible2 = true;
  }

  showDialog2(){
    this.visible3 = true;
  }

  showModal(){
    this.visible2 = true;
  }

  hideModal(){
    this.visible2 = false;
  }

  showMessageSuccess(mensaje:string){
    this.messageService.add({ key: 'toast', severity: 'success', summary: 'Exitoso', detail: mensaje, life: 3000 });
    this.messageService.clear();
  }

  showMessageError(mensaje:string){
    this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: mensaje, life: 3000 });
  }
  
  registrarProducto(){
    this.productoService.postProducto(this.nombre).subscribe(
      (response) => {
        console.log(response)
        
        this.getProductos();
        this.hideModal();

      },
      (error) => {
        console.error('Error al obtener ventas:', error);
      }
    );
    
  }

  editarProducto(){}
  

  eliminarProducto(id:number){
    this.productoService.deleteProductos(id).subscribe(
      (response) => {
        console.log(response)
        
        this.getProductos();

      },
      (error) => {
        console.error('Error al obtener ventas:', error);
      }
    );
  }

}
