import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AmICoolRoutingModule } from './am-i-cool-routing.module';
import { AmICoolComponent } from './am-i-cool.component';

@NgModule({
  declarations: [AmICoolComponent],
  imports: [SharedModule, AmICoolRoutingModule],
  providers: [],
})
export class AmICoolModule {}
