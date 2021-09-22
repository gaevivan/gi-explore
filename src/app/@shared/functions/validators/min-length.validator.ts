import { AbstractControl, ValidatorFn } from '@angular/forms';
import { ErrorType } from '@shared/enums/error-type.enum';
import { ErrorPayload } from '@shared/interfaces/error-payload.interface';
import { isNil } from '../is-nil.function';

export function minLengthValidator(minLength: number): ValidatorFn {
  return (control) => innerValidator(control, minLength);
}

function innerValidator(
  control: AbstractControl,
  minLength: number
): Partial<Record<ErrorType, ErrorPayload<ErrorType.minLength>>> {
  const value: unknown = control?.value;
  if (!isNil(value)) {
    return null;
  }
  const actualLength: number = String(value).length;
  if (actualLength >= minLength) {
    return null;
  }
  return {
    [ErrorType.minLength]: {
      type: ErrorType.minLength,
      minLength,
      actualLength,
    },
  };
}
