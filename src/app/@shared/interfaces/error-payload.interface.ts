import { ErrorType } from '@shared/enums/error-type.enum';

export type ErrorPayload<
  T extends ErrorType = ErrorType
> = T extends ErrorType.required
  ? BasePayload
  : T extends ErrorType.minLength
  ? Payload.MinLength
  : unknown;

namespace Payload {
  export interface MinLength extends BasePayload {
    minLength: number;
    actualLength: number;
  }
}

interface BasePayload {
  type: ErrorType;
}