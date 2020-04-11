import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class ValidarCamposService {
  constructor() {}

  // AbstractControl são os campos do formGroup
  hasError(control: AbstractControl, errorName: string): boolean {
    return control.hasError(errorName);
  }

  hasErrorValidar(control: AbstractControl, errorName: string): boolean {
    if (
      (control.dirty || control.touched) &&
      this.hasError(control, errorName)
    ) {
      return true;
    } 

    return false;
  }

  lengthValidar(control: AbstractControl, errorName: string): number {
    // aqui, error guarda o qual é o erro, se é required, min, minLength etc
    const error = control.errors[errorName];

    return error.requiredLength || error.min || error.max || 0;
  }
}
