import { LOCALE } from '@shared/constants/locale';
import { Locale } from '@shared/enums/locale.enum';

export function translate(
  value: string,
  locale: Locale = Locale.ru
): string {
  return LOCALE[locale][value];
}
