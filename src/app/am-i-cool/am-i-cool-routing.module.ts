import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmICoolComponent } from './am-i-cool.component';

const ROUTES: Routes = [
  {
    path: '',
    component: AmICoolComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class AmICoolRoutingModule {}
