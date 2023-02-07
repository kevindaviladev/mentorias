import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioGeneralService {


  enviarFactura = new Subject();
  enviarFactura$ = this.enviarFactura.asObservable();

  clienteData = {};
  productosData = {};


  hasError= false;

  constructor() { }
}
