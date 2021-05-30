import { AbstractControl } from '@angular/forms';
import { ErrorType } from '@shared/enums/error-type.enum';
import { ErrorPayload } from '@shared/interfaces/error-payload.interface';
import { isNil } from '../is-nil.function';

export function requiredValidator(
  control: AbstractControl
): Partial<Record<ErrorType, ErrorPayload<ErrorType.required>>> {
  const value: unknown = control?.value;
  if (!isNil(value)) {
    return null;
  }
  console.log(value);
  if (String(value).length > 0) {
    return null;
  }
  return {
    [ErrorType.required]: {
      type: ErrorType.required,
    },
  };
}
