import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Locale } from '@shared/enums/locale.enum';
import { CurrentProjectActions } from '@shared/stores/current-project/current-project.actions';
import { CurrentProjectState } from '@shared/stores/current-project/current-project.state';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss'],
})
export class LangComponent {
  public readonly isDarkModeOn$: Observable<boolean> = this.store.select(
    CurrentProjectState.getDarkMode()
  );
  public localesList: Locale[] = Object.values(Locale);
  public readonly localeControl: FormControl = new FormControl(
    this.store.selectSnapshot(CurrentProjectState.getLocale())
  );
  private readonly subscription: Subscription = new Subscription();

  constructor(private readonly store: Store) {
    this.subscription.add(this.saveLocaleToState());
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private saveLocaleToState(): Subscription {
    return this.localeControl.valueChanges.subscribe((locale: Locale) =>
      this.store.dispatch(new CurrentProjectActions.SetLocale(locale))
    );
  }
}
