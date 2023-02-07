import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormTestService {

  data = [];

  form = new FormGroup({});

  constructor() { }

  getFormFromFactura(){
    // this.form.addControl
    return this.form;
  }

  getFormFromGuia() {
    // this.form.addControl
    return this.form;
  }

  getFormAbuelo(){
    const factura = this.getFormFromFactura();
    const guia = this.getFormFromGuia();
    return {factura, guia}
  }
}
