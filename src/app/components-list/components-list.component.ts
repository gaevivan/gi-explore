import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { InteractiveColor } from '@shared/enums/button-color.enum';
import { Color } from '@shared/enums/color.enum';

@Component({
  selector: 'app-components-list',
  templateUrl: './components-list.component.html',
  styleUrls: ['./components-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class ComponentsListComponent {
  public readonly color: typeof Color = Color;
  public readonly interactiveColor: typeof InteractiveColor = InteractiveColor;
  public readonly radioControl: FormControl = new FormControl(1);
  public readonly inputsArray: unknown[] = new Array(5);
  public readonly colorsArray: InteractiveColor[] = [
    InteractiveColor.default,
    InteractiveColor.error,
    InteractiveColor.primary,
    InteractiveColor.success,
    InteractiveColor.warning,
  ];
}
