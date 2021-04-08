import { Route } from '@shared/enums/route.enum';

export const PAGES_LIST: [Route, string, Route][] = [
  [null, 'проекты', Route.projects],
  [null, 'игры', Route.games],
  [null, 'ui', Route.design],
  [Route.design, 'цветовой режим', Route.colormode],
  [Route.design, 'компоненты', Route.components],
  [Route.design, 'палитра', Route.palette],
  [Route.design, 'язык', Route.language],
  [Route.projects, 'авторизация', Route.auth],
  [Route.projects, 'генератор паролей', Route.randompass],
  [Route.projects, 'рандомизатор', Route.randomvalue],
  [Route.projects, 'калькулятор', Route.calculator],
  [Route.games, 'орёл-решка', Route.headsandtails],
  [Route.games, 'горячо-холодно', Route.hotcold],
];
