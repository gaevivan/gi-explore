import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DesignRoutingModule } from './design-routing.module';

@NgModule({
  imports: [SharedModule, DesignRoutingModule],
})
export class DesignModule {}
