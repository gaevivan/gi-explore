import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomValueComponent } from './random-value.component';

const routes: Routes = [
  {
    path: '',
    component: RandomValueComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomValueRoutingModule {}
