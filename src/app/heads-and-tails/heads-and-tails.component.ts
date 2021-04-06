import {
  ChangeDetectionStrategy,
  Component,

  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-heads-and-tails',
  templateUrl: './heads-and-tails.component.html',
  styleUrls: ['./heads-and-tails.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class HeadsAndTailsComponent {}
