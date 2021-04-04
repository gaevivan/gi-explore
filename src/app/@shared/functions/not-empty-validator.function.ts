import { AbstractControl, ValidationErrors } from '@angular/forms';

export function notEmptyValidator(control: AbstractControl): ValidationErrors {
  const value: string = String(control?.value ?? '');
  if (value.length > 0) {
    return null;
  }
  return { notEmptyValidator: true };
}
