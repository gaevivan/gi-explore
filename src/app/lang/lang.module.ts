import { NgModule } from '@angular/core';

import { LangRoutingModule } from './lang-routing.module';
import { LangComponent } from './lang.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [LangComponent],
  imports: [SharedModule, LangRoutingModule],
})
export class LangModule {}
