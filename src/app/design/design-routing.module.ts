import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Design } from '@shared/enums/design.enum';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: Design.palette,
  },
  {
    path: Design.palette,
    loadChildren: () =>
      import('../palette/palette.module').then(
        (module) => module.PaletteModule
      ),
  },
  {
    path: Design.colormode,
    loadChildren: () =>
      import('../color-mode/color-mode.module').then(
        (module) => module.ColorModeModule
      ),
  },
  {
    path: Design.components,
    loadChildren: () =>
      import('../components-list/components-list.module').then(
        (module) => module.ComponentsListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignRoutingModule {}
