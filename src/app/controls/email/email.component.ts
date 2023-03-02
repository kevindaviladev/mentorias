import { Component, forwardRef } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective, FormGroupName } from '@angular/forms';
import { createForm } from 'src/app/utils/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      // useExisting: FormGroupDirective,
      useExisting: forwardRef(() => FormGroupName),
    },
  ],
})
export class EmailComponent {
  constructor(public readonly controlContainer: ControlContainer) {}

  get form() {
    const form = createForm();

    return (this.controlContainer as FormGroupName).control;
  }



}
