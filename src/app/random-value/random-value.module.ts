import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RandomValueRoutingModule } from './random-value-routing.module';
import { RandomValueComponent } from './random-value.component';


@NgModule({
  declarations: [
    RandomValueComponent
  ],
  imports: [
    SharedModule,
    RandomValueRoutingModule
  ],
  providers: []
})
export class RandomValueModule { }
