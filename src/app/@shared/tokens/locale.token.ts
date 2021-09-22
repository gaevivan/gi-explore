import { InjectionToken } from '@angular/core';
import { Locale } from '@shared/enums/locale.enum';
import { BehaviorSubject } from 'rxjs';

export const LOCALE = new InjectionToken<BehaviorSubject<Locale>>(
  'LOCALE',
  {
    providedIn: 'root',
    factory: () => new BehaviorSubject<Locale>(Locale.ru),
  }
);
