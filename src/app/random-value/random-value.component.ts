import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { notEmptyArrayValidator } from '@shared/functions/not-empty-array-validator.function';
import { notEmptyValidator } from '@shared/functions/not-empty-validator.function';

@Component({
  selector: 'app-random-value',
  templateUrl: './random-value.component.html',
  styleUrls: ['./random-value.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class RandomValueComponent {
  public readonly valueControl: FormControl = new FormControl(null);
  public readonly addControl: FormControl = new FormControl('', [
    notEmptyValidator,
  ]);
  public readonly listControl: FormControl = new FormControl(
    [],
    [notEmptyArrayValidator]
  );

  constructor() {
    this.generate();
    this.valueControl.disable();
  }

  public copy(): void {
    navigator.clipboard.writeText(this.valueControl.value);
  }

  public generate(): void {
    const list: string[] = this.listControl.value;
    const randomNumber: number = Math.floor(Math.random() * list.length);
    this.valueControl.setValue(list[randomNumber]);
  }

  public add(): void {
    const list: string[] = this.listControl.value;
    list.push(this.addControl.value);
    this.addControl.setValue('');
    this.listControl.setValue(Array.from(new Set(list)));
  }

  public clear(): void {
    this.listControl.setValue([]);
    this.valueControl.setValue(null);
  }
}
