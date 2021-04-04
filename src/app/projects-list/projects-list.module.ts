import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ProjectsListRoutingModule } from './projects-list-routing.module';

@NgModule({
  imports: [SharedModule, ProjectsListRoutingModule],
})
export class ProjectsListModule {}
