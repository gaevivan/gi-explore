import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomPasswordComponent } from './random-password.component';

const ROUTES: Routes = [
  {
    path: '',
    component: RandomPasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class RandomPasswordRoutingModule {}
