import { Pipe } from '@angular/core';
import { Store } from '@ngxs/store';
import { Locale } from '@shared/enums/locale.enum';
import { translate } from '@shared/functions/translate.function';
import { CurrentProjectState } from '@shared/stores/current-project/current-project.state';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'translate',
})
export class TranslatePipe {
  constructor(private readonly store: Store) {}

  public transform(value: unknown): Observable<string> {
    return this.store
      .select(CurrentProjectState.getLocale())
      .pipe(map((locale: Locale) => translate(String(value), locale)));
  }
}
