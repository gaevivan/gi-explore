import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '@shared/components/not-found/not-found.component';
import { Path } from '@shared/enums/path.enum';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: Path.projects,
  },
  {
    path: Path.projects,
    loadChildren: () =>
      import('./projects-list/projects-list.module').then(
        (module) => module.ProjectsListModule
      ),
  },
  {
    path: Path.design,
    loadChildren: () =>
      import('./design/design.module').then(
        (module) => module.DesignModule
      ),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
