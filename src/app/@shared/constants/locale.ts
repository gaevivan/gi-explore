import { Locale } from '@shared/enums/locale.enum';

export const LOCALE: { [key: string]: any } = {
  [Locale.ru]: {
    cold: 'Холодно',
    colder: 'Холоднее',
    hot: 'Горячо',
    hotter: 'Горячее',
    success: 'Успех',
    head: 'Орёл',
    tail: 'Решка',
    colorMode: 'Цветовой режим',
    language: 'Язык',
    ru: 'Русский',
    en: 'Английский',
  },
  [Locale.en]: {
    cold: 'Cold',
    colder: 'Colder',
    hot: 'Hot',
    hotter: 'Hotter',
    success: 'Success',
    head: 'Head',
    tail: 'Tail',
    colorMode: 'Color Mode',
    language: 'Language',
    ru: 'Russian',
    en: 'English',
  },
};
