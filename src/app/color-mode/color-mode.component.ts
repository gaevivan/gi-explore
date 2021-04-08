import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  ViewEncapsulation
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Color } from '@shared/enums/color.enum';
import { CurrentProjectActions } from '@shared/stores/current-project/current-project.actions';
import { CurrentProjectState } from '@shared/stores/current-project/current-project.state';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-color-mode',
  templateUrl: './color-mode.component.html',
  styleUrls: ['./color-mode.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class ColorModeComponent implements OnDestroy {
  public readonly isDarkModeOn$: Observable<boolean> = this.store.select(CurrentProjectState.getDarkMode());
  public readonly color: typeof Color = Color;
  public readonly colorControl: FormControl = new FormControl(this.store.selectSnapshot(CurrentProjectState.getDarkMode()));
  private readonly subscription: Subscription = new Subscription();

  constructor(private readonly store: Store) {
    this.subscription.add(this.saveColorToState());
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private saveColorToState(): Subscription {
    return this.colorControl.valueChanges.subscribe(
      (isDarkModeOn: boolean) =>
        this.store.dispatch(new CurrentProjectActions.SetDarkMode(isDarkModeOn))
    );
  }
}
