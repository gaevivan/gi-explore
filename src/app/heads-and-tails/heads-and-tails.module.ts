import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { HeadsAndTailsRoutingModule } from './heads-and-tails-routing.module';
import { HeadsAndTailsComponent } from './heads-and-tails.component';

@NgModule({
  declarations: [HeadsAndTailsComponent],
  imports: [SharedModule, HeadsAndTailsRoutingModule],
  providers: [],
})
export class HeadsAndTailsModule {}
