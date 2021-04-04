import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ColorModeRoutingModule } from './color-mode-routing.module';
import { ColorModeComponent } from './color-mode.component';

@NgModule({
  declarations: [ColorModeComponent],
  imports: [SharedModule, ColorModeRoutingModule],
  providers: [],
})
export class ColorModeModule {}
