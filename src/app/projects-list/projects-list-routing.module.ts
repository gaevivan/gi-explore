import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Path } from '@shared/enums/path.enum';
import { Project } from '@shared/enums/project.enum';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: Project.randompass,
  },
  {
    path: Project.randompass,
    loadChildren: () =>
      import('../random-password/random-password.module').then(
        (module) => module.RandomPasswordModule
      ),
  },
  {
    path: Project.randomvalue,
    loadChildren: () =>
      import('../random-value/random-value.module').then(
        (module) => module.RandomValueModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsListRoutingModule {}
