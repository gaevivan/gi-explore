import { AbstractControl, ValidationErrors } from '@angular/forms';

export function notEmptyArrayValidator(control: AbstractControl): ValidationErrors {
  const value: unknown = control?.value;
  if (Array.isArray(value) && value.length > 0) {
    return null;
  }
  return { notEmptyArrayValidator: true };
}
