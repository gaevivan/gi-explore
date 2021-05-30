import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@shared/enums/route.enum';

const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: Route.explore,
  },
  {
    path: Route.explore,
    loadChildren: () =>
      import('./explore/explore.module').then((module) => module.ExploreModule),
  },
  {
    path: Route.games,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: Route['heads-and-tails'],
      },
      {
        path: Route['heads-and-tails'],
        loadChildren: () =>
          import('./heads-and-tails/heads-and-tails.module').then(
            (module) => module.HeadsAndTailsModule
          ),
      },
    ],
  },
  {
    path: Route.design,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: Route.palette,
      },
      {
        path: Route.palette,
        loadChildren: () =>
          import('./palette/palette.module').then(
            (module) => module.PaletteModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
