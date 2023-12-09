import { Component, OnInit  } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public visible: boolean = false;
  public arrayProducts!: any[];
  public product:any;
  public unidades: any = [];
  public unidadSeleccionada!: number;
  public productoSeleccionado!: any;
  public cantidad!: any;
  public unidadMostrada: any;
  public mostrarMensajeUnidad!: string;
  public ventas: any = [];
  public total: number = 0;
  public msjTotal: any = 0;
  constructor(private authServiceService: AuthServiceService,private messageService: MessageService){

  }
  ngOnInit(): void {
    this.authServiceService.obtenerProductos().subscribe(
      (response) => {
        console.log(response);
        this.arrayProducts = response;
      },
      (error) => {
        console.error('Error al iniciar sesión', error);
      }
    );
    // this.visible = true;
  }

  showDialog(product: any) {
    this.product = product;
    // this.productoSeleccionado = product; 
    this. productoSeleccionado = {
      id_producto: product.id_producto,
      nombre_producto: product.nombre_producto,
    };
    this.unidades = product.detalles;
    this.visible = true;
  }

  onDialogHide() {
    this.cantidad = 0;
    this.unidadSeleccionada = 0;
    this.visible = false;
  }

  validarTipoUnidad() {
    this.cantidad = 0;
    if (this.unidadSeleccionada-1 === 2){
      this.mostrarMensajeUnidad = `El precio por unidad es de $ ${this.unidades[this.unidadSeleccionada-1].precio} por cada 100 gramos`;
    }else{
      this.mostrarMensajeUnidad = `El presio por unidad es de $ ${this.unidades[this.unidadSeleccionada-1].precio}`;
    }
    
  }

  get validarCantidad(){
    if (this.cantidad > 0) return false;
    return true;
  }

  agregarVenta(){
    this.ventas.push({
      id_producto: this.productoSeleccionado.id_producto,
      nombre_producto: this.productoSeleccionado.nombre_producto,
      id_unidad: this.unidades[this.unidadSeleccionada-1].id_unidad,
      nombre_unidad: this.unidades[this.unidadSeleccionada-1].nombre_unidad,
      cantidad: this.cantidad,
      total: this.unidades[this.unidadSeleccionada-1].id_unidad !== 3 ? this.cantidad * this.unidades[this.unidadSeleccionada-1].precio: (this.cantidad/100) * this.unidades[this.unidadSeleccionada-1].precio
    }
    );
    this.obtenerTotal();
  }

  eliminarVenta(index: number){
    this.ventas.splice(index, 1);
    this.obtenerTotal();
  }



  obtenerTotal(){
    this.total = 0;
    if(this.ventas.length === 0){
      this.msjTotal = "";
    }
    for (const key in this.ventas) {
      console.log(this.ventas[key].total);
      this.total += this.ventas[key].total;
    }

    this.msjTotal = `Este es el total de ventas: $ ${this.total}`;
  }

  guardarVenta(){
    console.log(this.ventas);
    this.authServiceService.registrarVenta(this.ventas).subscribe(
      (response) => {
        console.log(response);
        // this.arrayProducts = response;
        this.messageService.clear();
      this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: response.mensaje });
      },
      (error) => {
        console.error('Error al iniciar sesión', error);
      }
    );    
  }

}
