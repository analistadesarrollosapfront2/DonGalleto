import { Component } from '@angular/core';
import { ControlVentasService } from 'src/app/service/control-ventas/control-ventas.service';

@Component({
  selector: 'app-control-ventas',
  templateUrl: './control-ventas.component.html',
  styleUrls: ['./control-ventas.component.scss']
})
export class ControlVentasComponent {
  customers!: any[];

  constructor(private ControlVentasService: ControlVentasService) {}

  ngOnInit() {
    this.ControlVentasService.getCustomersLarge().then((customers) => (this.customers = customers));
}
}
