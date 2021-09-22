import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconComponent } from './components/icon/icon.component';
import { MenuComponent } from './components/menu/menu.component';
import { RandomColorDirective } from './directives/random-color.directive';
import { DefaultPipe } from './pipes/default.pipe';

const MODULES: any[] = [FormsModule, ReactiveFormsModule, CommonModule];
const COMPONENTS: any[] = [IconComponent, MenuComponent];
const DIRECTIVES: any[] = [RandomColorDirective];
const PIPES: any[] = [DefaultPipe];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES, DIRECTIVES],
  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS, ...PIPES, DIRECTIVES],
})
export class SharedModule {}
