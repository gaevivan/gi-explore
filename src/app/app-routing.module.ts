import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@shared/components/not-found/not-found.component';
import { Route } from '@shared/enums/route.enum';

const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: Route.projects,
  },
  {
    path: Route.games,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: Route.headsandtails
      },
      {
        path: Route.headsandtails,
        loadChildren: () =>
          import('./heads-and-tails/heads-and-tails.module').then(
            (module) => module.HeadsAndTailsModule
          ),
      },
      {
        path: Route.hotcold,
        loadChildren: () =>
          import('./hot-cold/hot-cold.module').then(
            (module) => module.HotColdModule
          ),
      },
    ],
  },
  {
    path: Route.projects,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: Route.randompass
      },
      {
        path: Route.randompass,
        loadChildren: () =>
          import('./random-password/random-password.module').then(
            (module) => module.RandomPasswordModule
          ),
      },
      {
        path: Route.randomvalue,
        loadChildren: () =>
          import('./random-value/random-value.module').then(
            (module) => module.RandomValueModule
          ),
      },
      {
        path: Route.calc,
        pathMatch: 'full',
        redirectTo: Route.calculator,
      },
      {
        path: Route.calculator,
        loadChildren: () =>
          import('./calc/calc.module').then((module) => module.CalcModule),
      },
      {
        path: Route.auth,
        loadChildren: () =>
          import('./auth/auth.module').then((module) => module.AuthModule),
      },
    ],
  },
  {
    path: Route.design,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: Route.palette
      },
      {
        path: Route.lang,
        pathMatch: 'full',
        redirectTo: Route.language,
      },
      {
        path: Route.language,
        loadChildren: () =>
          import('./lang/lang.module').then((module) => module.LangModule),
      },
      {
        path: Route.palette,
        loadChildren: () =>
          import('./palette/palette.module').then(
            (module) => module.PaletteModule
          ),
      },
      {
        path: Route.colormode,
        loadChildren: () =>
          import('./color-mode/color-mode.module').then(
            (module) => module.ColorModeModule
          ),
      },
      {
        path: Route.components,
        loadChildren: () =>
          import('./components-list/components-list.module').then(
            (module) => module.ComponentsListModule
          ),
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
