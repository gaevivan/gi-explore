import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaletteComponent } from './palette.component';

const routes: Routes = [
  {
    path: '',
    component: PaletteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaletteRoutingModule {}
