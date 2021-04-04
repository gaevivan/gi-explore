import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-random-password',
  templateUrl: './random-password.component.html',
  styleUrls: ['./random-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class RandomPasswordComponent {
  public readonly passwordControl: FormControl = new FormControl();

  constructor() {
    this.generate();
    this.passwordControl.disable();
  }

  public generate(): void {
    const generatedValue: string = Math.random().toString(36).slice(-8);
    this.passwordControl.setValue(generatedValue);
  }

  public copy(): void {
    navigator.clipboard.writeText(this.passwordControl.value);
  }
}
