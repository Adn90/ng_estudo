import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { ValidarCamposService } from 'src/app/course/servico/validar-campos.service';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent  {

  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() minimo: number = 0;
  @Input() maximo: number = 5;
  @Input() step: number = 0.5;

  constructor(public validarCampo: ValidarCamposService) { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
