import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorModeComponent } from './color-mode.component';

const routes: Routes = [
  {
    path: '',
    component: ColorModeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColorModeRoutingModule {}
