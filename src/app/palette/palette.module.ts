import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PaletteRoutingModule } from './palette-routing.module';
import { PaletteComponent } from './palette.component';

@NgModule({
  declarations: [PaletteComponent],
  imports: [SharedModule, PaletteRoutingModule],
  providers: [],
})
export class PaletteModule {}
