import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ComponentsListRoutingModule } from './components-list-routing.module';
import { ComponentsListComponent } from './components-list.component';


@NgModule({
  declarations: [
    ComponentsListComponent
  ],
  imports: [
    SharedModule,
    ComponentsListRoutingModule
  ],
  providers: []
})
export class ComponentsListModule { }
