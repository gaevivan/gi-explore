import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Inject,
  ViewEncapsulation
} from '@angular/core';
import { Store } from '@ngxs/store';
import { PAGES_LIST } from '@shared/constants/pages-list.const';
import { Color } from '@shared/enums/color.enum';
import { Route } from '@shared/enums/route.enum';
import { isNil } from '@shared/functions/is-nil.function';
import { KeyValueObject } from '@shared/interfaces/key-value-object.interface';
import { CurrentProjectState } from '@shared/stores/current-project/current-project.state';
import { IS_MENU_OPENED } from '@shared/tokens/is-menu-opened.token';
import { BehaviorSubject, Observable, of } from 'rxjs';

interface ColumnItem {
  children: KeyValueObject[];
  color: Color;
  name: string;
  key: Route;
}

const COLORS: Color[] = [Color.blue, Color.green, Color.orange];

const APP_PAGES_LIST: ColumnItem[] = PAGES_LIST.filter((item) => isNil(item[0])).map((item, index: number) => {
  const columnItem: ColumnItem = {
    key: item[2],
    name: item[1],
    children: PAGES_LIST.filter((value) => value[0] === item[2]).map((value) => ({key: value[2], value: value[1]})),
    color: COLORS[index]
  };
  return columnItem;
});

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class MenuComponent {
  public readonly isDarkModeOn$: Observable<boolean> = this.store.select(CurrentProjectState.getDarkMode());
  public readonly appSectionsList$: Observable<ColumnItem[]> = of(
    APP_PAGES_LIST
  );

  constructor(
    private readonly store: Store,
    @Inject(IS_MENU_OPENED)
    public readonly isMenuOpened$: BehaviorSubject<boolean>
  ) {}

  @HostListener('click')
  public close(): void {
    this.isMenuOpened$.next(false);
  }
}
