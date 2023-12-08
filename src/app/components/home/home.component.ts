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

  public arrayProducts!: any[];
  constructor(private authServiceService: AuthServiceService,){}
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
}

}
