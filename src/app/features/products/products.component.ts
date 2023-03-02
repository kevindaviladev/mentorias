import { Component } from '@angular/core';
import { ServicioGeneralService } from 'src/app/services/servicio-general.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  constructor(private servicioGeneral: ServicioGeneralService) {}
  enviarFactura() {
    this.servicioGeneral.enviarFactura.next(true);



    if (this.servicioGeneral.hasError) {
      console.error('Un formulario está con errores');

    }else{
      console.log(this.servicioGeneral.clienteData);
    }


  }
}
