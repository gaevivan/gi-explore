import {
  ChangeDetectionStrategy,
  Component,

  ViewEncapsulation
} from '@angular/core';
import { Color } from '@shared/enums/color.enum';
import { KeyValueObject } from '@shared/interfaces/key-value-object.interface';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class PaletteComponent {
  public readonly color: typeof Color = Color;
  public readonly colorsList: KeyValueObject<Color>[] = Object.keys(Color).map((key: Color) => ({
    key,
    value: Color[key]
  }));
}
