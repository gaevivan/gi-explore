import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Store } from '@ngxs/store';
import { AppRoute } from '@shared/enums/app-route.enum';
import { Color } from '@shared/enums/color.enum';
import { KeyValueObject } from '@shared/interfaces/key-value-object.interface';
import { DesignListState } from '@shared/stores/design-list/design-list.state';
import { GameListState } from '@shared/stores/game-list/game-list.state';
import { ProjectListState } from '@shared/stores/project-list/project-list.state';
import { IS_MENU_OPENED } from '@shared/tokens/is-menu-opened.token';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class MenuComponent {
  public readonly color: typeof Color = Color;
  public readonly projectList$: Observable<
    KeyValueObject[]
  > = this.store.select(ProjectListState).pipe(
    map((itemsList: KeyValueObject[]) =>
      itemsList.map((item: KeyValueObject) => ({
        ...item,
        key: `/${AppRoute.projects}/${item.key}`,
      }))
    )
  );
  public readonly designList$: Observable<
    KeyValueObject[]
  > = this.store.select(DesignListState).pipe(
    map((itemsList: KeyValueObject[]) =>
      itemsList.map((item: KeyValueObject) => ({
        ...item,
        key: `/${AppRoute.design}/${item.key}`,
      }))
    )
  );
  public readonly gameList$: Observable<
    KeyValueObject[]
  > = this.store.select(GameListState).pipe(
    map((itemsList: KeyValueObject[]) =>
      itemsList.map((item: KeyValueObject) => ({
        ...item,
        key: `/${AppRoute.games}/${item.key}`,
      }))
    )
  );

  constructor(
    @Inject(IS_MENU_OPENED)
    public readonly isMenuOpened$: BehaviorSubject<boolean>,
    private readonly store: Store
  ) {}

  @HostListener('click')
  public close(): void {
    this.isMenuOpened$.next(false);
  }
}
