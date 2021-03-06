import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomValueComponent } from './random-value.component';

const ROUTES: Routes = [
  {
    path: '',
    component: RandomValueComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class RandomValueRoutingModule {}
