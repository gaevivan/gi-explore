import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotColdRoutingModule } from './hot-cold-routing.module';
import { HotColdComponent } from './hot-cold.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [HotColdComponent],
  imports: [
    SharedModule,
    HotColdRoutingModule
  ]
})
export class HotColdModule { }
