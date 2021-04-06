import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaletteComponent } from './palette.component';

const ROUTES: Routes = [
  {
    path: '',
    component: PaletteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class PaletteRoutingModule {}
