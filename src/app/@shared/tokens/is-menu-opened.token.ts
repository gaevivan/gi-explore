import { InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const IS_MENU_OPENED = new InjectionToken<BehaviorSubject<boolean>>(
  'IS_MENU_OPENED',
  {
    providedIn: 'root',
    factory: () => new BehaviorSubject<boolean>(false),
  }
);
