import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar-paciente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './listar-paciente.component.html',
  styleUrls: ['./listar-paciente.component.scss']
})
export class ListarPacienteComponent {

  constructor( public authService: AuthService) {}

  

}
