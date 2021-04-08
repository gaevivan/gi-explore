import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MatIconModule } from '@angular/material/icon';
import { DefaultPipe } from './pipes/default.pipe';
import { TranslatePipe } from './pipes/translate.pipe';
import { ColorModePipe } from './pipes/color-mode.pipe';

const MODULES: any[] = [FormsModule, ReactiveFormsModule, CommonModule, MatIconModule];
const COMPONENTS: any[] = [NotFoundComponent, MenuComponent];
const PIPES: any[] = [DefaultPipe, ColorModePipe, TranslatePipe];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS, ...PIPES],
})
export class SharedModule {}
