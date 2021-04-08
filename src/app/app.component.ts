import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { IS_MENU_OPENED } from '@shared/tokens/is-menu-opened.token';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  constructor(
    @Inject(IS_MENU_OPENED)
    public readonly isMenuOpened$: BehaviorSubject<boolean>
  ) {}

  public openMenu(): void {
    this.isMenuOpened$
      .pipe(take(1))
      .subscribe((value: boolean) => this.isMenuOpened$.next(!value));
  }
}
