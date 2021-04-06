import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorModeComponent } from './color-mode.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ColorModeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ColorModeRoutingModule {}
