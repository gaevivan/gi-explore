import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Icon } from '@shared/enums/icon.enum';
import { Route } from '@shared/enums/route.enum';
import { Theme } from '@shared/enums/theme.enum';
import { THEME } from '@shared/tokens/theme.token';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

interface MenuItem {
  icon: Icon;
  name: string;
  callback: Function;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MenuComponent {
  public readonly menu: MenuItem[] = [
    {
      icon: Icon.apps,
      name: 'Главная',
      callback: () => this.router.navigateByUrl(Route.explore),
    },
    {
      icon: Icon.apps,
      name: 'Язык',
      callback: () => void 0,
    },
    {
      icon: Icon.apps,
      name: 'Тема',
      callback: this.toggleTheme.bind(this),
    },
  ];

  constructor(@Inject(THEME) public readonly theme$: BehaviorSubject<Theme>, private readonly router: Router) {}

  public toggleTheme(): void {
    this.theme$
      .pipe(take(1))
      .subscribe((theme: Theme) =>
        this.theme$.next(theme === Theme.dark ? Theme.light : Theme.dark)
      );
  }

  public isDarkTheme(theme: Theme): boolean {
    return theme === Theme.dark;
  }

  public toMain(): void {
    this.router.navigateByUrl(Route.explore);
  }
}
