import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomPasswordComponent } from './random-password.component';

const routes: Routes = [
  {
    path: '',
    component: RandomPasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomPasswordRoutingModule {}
