import { InjectionToken } from '@angular/core';
import { Theme } from '@shared/enums/theme.enum';
import { BehaviorSubject } from 'rxjs';

export const THEME = new InjectionToken<BehaviorSubject<Theme>>(
  'THEME',
  {
    providedIn: 'root',
    factory: () => new BehaviorSubject<Theme>(Theme.dark),
  }
);
