import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Inject,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Theme } from '@shared/enums/theme.enum';
import { THEME } from '@shared/tokens/theme.token';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  @HostBinding('style.backgroundColor') backgroundColor: string;

  private subscription: Subscription = new Subscription();

  constructor(
    @Inject(THEME) public readonly theme$: Observable<Theme>,
    titleService: Title
  ) {
    titleService.setTitle('Explore gi-projects');
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public isDarkTheme(theme: Theme): boolean {
    return theme === Theme.dark;
  }
}
