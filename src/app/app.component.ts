import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Store } from '@ngxs/store';
import { Color } from '@shared/enums/color.enum';
import { ColorModeState } from '@shared/stores/color-mode/color-mode.state';
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
  public readonly color$: Observable<Color> = this.store.select(ColorModeState);

  constructor(
    @Inject(IS_MENU_OPENED)
    public readonly isMenuOpened$: BehaviorSubject<boolean>,
    private readonly store: Store
  ) {}

  public openMenu(): void {
    this.isMenuOpened$
      .pipe(take(1))
      .subscribe((value: boolean) => this.isMenuOpened$.next(!value));
  }
}
