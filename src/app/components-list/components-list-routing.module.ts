import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsListComponent } from './components-list.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ComponentsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ComponentsListRoutingModule {}
