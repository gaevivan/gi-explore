import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeadsAndTailsComponent } from './heads-and-tails.component';

const ROUTES: Routes = [
  {
    path: '',
    component: HeadsAndTailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class HeadsAndTailsRoutingModule {}
