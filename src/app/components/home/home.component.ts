import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  title = 'Banco';
  bancos: any[] = [
    { label: 'Seleccione un banco', value: '' }, 
    { label: 'BBVUTL', value: 'bbvutl' },
    { label: 'BANCOEXPRESS', value: 'bancoexpress' }
  ];
  
  bancoSeleccionado: string = '';
  noTarjeta: string = '';
  nip: string = '';
  monto: number | null = null;  
  mensaje: string = '';

  constructor(private apiService: AuthServiceService) { }

  validarSoloLetras(event: KeyboardEvent) {
    const pattern = /[a-zA-Z]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  validarSoloNumeros(event: KeyboardEvent) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  

  realizarRetiro() {
    const datos = {
      banco: this.bancoSeleccionado,
      cuenta: this.noTarjeta,
      nip: this.nip,
      cantidad: this.monto
    };
    console.log(  datos);
    
    this.apiService.retirar(datos)
      .subscribe(
        (respuesta) => {
          this.mensaje = respuesta.mensaje; 
        },
        (error) => {
          console.error('Error en la solicitud:', error);
       
          this.mensaje = 'Error al realizar el retiro';
        }
      );
  }
  

  
}



