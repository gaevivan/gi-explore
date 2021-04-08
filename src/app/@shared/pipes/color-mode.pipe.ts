import { Pipe } from '@angular/core';
import { Color } from '@shared/enums/color.enum';
import { getColorByDarkMode } from '@shared/functions/get-color-by-dark-mode.function';

@Pipe({
  name: 'colorMode',
})
export class ColorModePipe {
  public transform(
    isDarkModeOn: boolean,
    instanceType: 'bg' | 'text' = 'bg'
  ): Color.bgdark | Color.bglight {
    return getColorByDarkMode(isDarkModeOn, instanceType);
  }
}
