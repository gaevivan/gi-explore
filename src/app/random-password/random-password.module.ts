import { NgModule } from '@angular/core';
import { RandomPasswordRoutingModule } from './random-password-routing.module';
import { RandomPasswordComponent } from './random-password.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    RandomPasswordComponent
  ],
  imports: [
    SharedModule,
    RandomPasswordRoutingModule
  ],
  providers: []
})
export class RandomPasswordModule { }
