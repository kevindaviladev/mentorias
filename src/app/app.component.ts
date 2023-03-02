import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormTestService } from './services/form-test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'testMentoring';

  formAbuelo = new FormGroup({});

  constructor(private formTestService: FormTestService) {}

  sendData() {
    this.formAbuelo.markAllAsTouched();
    console.log('Data enviada!', this.formAbuelo.value);
  }
}
