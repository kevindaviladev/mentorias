import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { ServicioGeneralService } from 'src/app/services/servicio-general.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class ClientComponent implements OnInit {
  @Output() sendData = new EventEmitter();
  constructor(public readonly controlContainer: ControlContainer, private servicioGeneral: ServicioGeneralService) {}

  ngOnInit(): void {


    this.servicioGeneral.enviarFactura$.subscribe( res => {

      console.log("Recibí la petición para mandar factura!s");
      this.formPadre.markAllAsTouched();
      if(this.formPadre.valid){
        this.servicioGeneral.clienteData = this.formPadre.value;
      }else{
        this.servicioGeneral.hasError = true;
      }
    })






    this.formPadre.addControl('client', new FormGroup({
      email: new FormControl('', Validators.required),
      // documentType: new FormControl('DNI', Validators.required),
    }));
  }

  get formPadre() {
    return (this.controlContainer as FormGroupDirective).form;
  }

  send(){
    console.log();

    this.sendData.emit(true);
  }


  // {
  //   email: new FormControl('', Validators.required),
  //   documentType: new FormControl('', Validators.required),
  // }
}
