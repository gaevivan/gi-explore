import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { DefaultPipe } from './pipes/default.pipe';

const MODULES: any[] = [FormsModule, ReactiveFormsModule, CommonModule];
const COMPONENTS: any[] = [CardComponent];
const PIPES: any[] = [DefaultPipe];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES, CardComponent],
  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS, ...PIPES],
})
export class SharedModule {}
