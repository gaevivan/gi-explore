import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StopwatchComponent } from './stopwatch.component';
import { StopwatchRoutingModule } from './stopwatch-routing.module';

@NgModule({
  declarations: [StopwatchComponent],
  imports: [
    CommonModule,
    StopwatchRoutingModule
  ]
})
export class StopwatchModule { }
