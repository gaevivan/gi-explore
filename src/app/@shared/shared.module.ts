import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MatIconModule } from '@angular/material/icon';
import { DefaultPipe } from './pipes/default/default.pipe';

const MODULES: any[] = [FormsModule, ReactiveFormsModule, CommonModule, MatIconModule];
const COMPONENTS: any[] = [NotFoundComponent, MenuComponent];
const PIPES: any[] = [DefaultPipe];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS, ...PIPES],
})
export class SharedModule {}
