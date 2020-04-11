import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { ValidarCamposService } from 'src/app/course/servico/validar-campos.service';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent {

  // injetar valores no componente
  @Input() formGroup: FormGroup;
  // controlName é o que vai ser injetado como o formControlName
  @Input() controlName: string;

  constructor(public validarCampo: ValidarCamposService) { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
