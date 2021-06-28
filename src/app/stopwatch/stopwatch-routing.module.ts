import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StopwatchComponent } from './stopwatch.component';

const ROUTES: Routes = [
  {
    path: '',
    component: StopwatchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class StopwatchRoutingModule {}
