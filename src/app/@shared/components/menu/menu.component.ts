import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Inject,
  ViewEncapsulation
} from '@angular/core';
import { Store } from '@ngxs/store';
import { AppRoute } from '@shared/enums/app-route.enum';
import { Color } from '@shared/enums/color.enum';
import { DesignRoute } from '@shared/enums/design-route.enum';
import { GameRoute } from '@shared/enums/game-route.enum';
import { ProjectRoute } from '@shared/enums/project-route.enum';
import { KeyValueObject } from '@shared/interfaces/key-value-object.interface';
import { ColorModeState } from '@shared/stores/color-mode/color-mode.state';
import { IS_MENU_OPENED } from '@shared/tokens/is-menu-opened.token';
import { BehaviorSubject, Observable, of } from 'rxjs';

interface ColumnItem {
  children: KeyValueObject[];
  color: Color;
  name: string;
  key: AppRoute;
}

const DESIGN_PAGES_LIST: KeyValueObject[] = [
  {
    key: DesignRoute.colormode,
    value: 'тёмная тема',
  },
  {
    key: DesignRoute.components,
    value: 'компоненты',
  },
  {
    key: DesignRoute.palette,
    value: 'палитра',
  },
];

const PROJECT_PAGES_LIST: KeyValueObject[] = [
  {
    key: ProjectRoute.calc,
    value: 'калькулятор',
  },
  {
    key: ProjectRoute.randompass,
    value: 'генератор паролей',
  },
  {
    key: ProjectRoute.randomvalue,
    value: 'генератор значений',
  },
];

const GAME_PAGES_LIST: KeyValueObject[] = [
  {
    key: GameRoute.headsandtails,
    value: 'орёл-решка',
  },
  {
    key: GameRoute.hotcold,
    value: 'горячо-холодно',
  },
];

const APP_PAGES_LIST: ColumnItem[] = [
  {
    key: AppRoute.design,
    name: 'дизайн',
    children: DESIGN_PAGES_LIST,
    color: Color.blue
  },
  {
    key: AppRoute.projects,
    name: 'проекты',
    children: PROJECT_PAGES_LIST,
    color: Color.red
  },
  {
    key: AppRoute.games,
    name: 'игры',
    children: GAME_PAGES_LIST,
    color: Color.orange
  },
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class MenuComponent {
  public readonly color: typeof Color = Color;
  public readonly bgColor$: Observable<Color> = this.store.select(ColorModeState);
  public readonly textColor$: Observable<Color> = this.store.select(ColorModeState.getTextColor());
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
