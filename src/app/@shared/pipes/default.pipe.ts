import { Pipe } from "@angular/core";
import { isNil } from "@shared/functions/is-nil.function";

@Pipe({
  name: 'default'
})
export class DefaultPipe {
  public transform(value: unknown, replaceWith: string): string {
    if (isNil(value)) {
      return replaceWith ?? '';
    }
    return String(value);
  }
}