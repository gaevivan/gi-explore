import { Color } from '@shared/enums/color.enum';

export function getColorByDarkMode(
  isDarkModeOn: boolean,
  instanceType: 'bg' | 'text' = 'bg'
): Color.bglight | Color.bgdark {
  if (instanceType === 'bg') {
    return isDarkModeOn ? Color.bgdark : Color.bglight;
  }
  return isDarkModeOn ? Color.bglight : Color.bgdark;
}
