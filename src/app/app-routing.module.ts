import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '@shared/components/not-found/not-found.component';
import { AppRoute } from '@shared/enums/app-route.enum';
import { DesignRoute } from '@shared/enums/design-route.enum';
import { GameRoute } from '@shared/enums/game-route.enum';
import { ProjectRoute } from '@shared/enums/project-route.enum';

const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppRoute.projects,
  },
  {
    path: AppRoute.games,
    children: [
      {
        path: GameRoute.headsandtails,
        loadChildren: () =>
          import('./random-password/random-password.module').then(
            (module) => module.RandomPasswordModule
          ),
      },
      {
        path: GameRoute.hotcold,
        loadChildren: () =>
          import('./hot-cold/hot-cold.module').then(
            (module) => module.HotColdModule
          ),
      },
    ],
  },
  {
    path: AppRoute.projects,
    children: [
      {
        path: ProjectRoute.randompass,
        loadChildren: () =>
          import('./random-password/random-password.module').then(
            (module) => module.RandomPasswordModule
          ),
      },
      {
        path: ProjectRoute.randomvalue,
        loadChildren: () =>
          import('./random-value/random-value.module').then(
            (module) => module.RandomValueModule
          ),
      },
    ],
  },
  {
    path: AppRoute.design,
    children: [
      {
        path: DesignRoute.palette,
        loadChildren: () =>
          import('./palette/palette.module').then(
            (module) => module.PaletteModule
          ),
      },
      {
        path: DesignRoute.colormode,
        loadChildren: () =>
          import('./color-mode/color-mode.module').then(
            (module) => module.ColorModeModule
          ),
      },
      {
        path: DesignRoute.components,
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
