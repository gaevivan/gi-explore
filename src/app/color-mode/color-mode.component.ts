import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  ViewEncapsulation
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Color } from '@shared/enums/color.enum';
import { ColorModeActions } from '@shared/stores/color-mode/color-mode.actions';
import { ColorModeState } from '@shared/stores/color-mode/color-mode.state';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-color-mode',
  templateUrl: './color-mode.component.html',
  styleUrls: ['./color-mode.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class ColorModeComponent implements OnDestroy {
  public readonly color: typeof Color = Color;
  public readonly colorControl: FormControl = new FormControl(this.store.selectSnapshot(ColorModeState));
  private readonly subscription: Subscription = new Subscription();

  constructor(private readonly store: Store) {
    this.subscription.add(this.saveColorToState());
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private saveColorToState(): Subscription {
    return this.colorControl.valueChanges.subscribe(
      (color: Color.bgdark | Color.bglight) =>
        this.store.dispatch(new ColorModeActions.Cache(color))
    );
  }
}
