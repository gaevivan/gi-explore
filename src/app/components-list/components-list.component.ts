import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Color } from '@shared/enums/color.enum';
import { KeyValueObject } from '@shared/interfaces/key-value-object.interface';

@Component({
  selector: 'app-components-list',
  templateUrl: './components-list.component.html',
  styleUrls: ['./components-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class ComponentsListComponent {
  public readonly color: typeof Color = Color;
  public readonly radioControl: FormControl = new FormControl(1);
  public readonly inputsArray: unknown[] = new Array(5);
  public readonly colorsArray: Color[] = [
    Color.blue,
    Color.red,
    Color.yellow,
    Color.dark,
    Color.orange,
    Color.green,
  ];
}
