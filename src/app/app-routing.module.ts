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
      {
        path: Route['hot-and-cold'],
        loadChildren: () =>
          import('./hot-cold/hot-cold.module').then(
            (module) => module.HotColdModule
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
  {
    path: Route.projects,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: Route['am-i-cool'],
      },
      {
        path: Route['am-i-cool'],
        loadChildren: () =>
          import('./am-i-cool/am-i-cool.module').then(
            (module) => module.AmICoolModule
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
