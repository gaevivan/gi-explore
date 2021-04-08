import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-heads-and-tails',
  templateUrl: './heads-and-tails.component.html',
  styleUrls: ['./heads-and-tails.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class HeadsAndTailsComponent {
  public readonly result$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    null
  );
  public readonly isRed$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  @HostListener('click')
  public toss(): void {
    window.getSelection().removeAllRanges();
    const randomNumber: number = Math.round(Math.random());
    const result: boolean = Boolean(randomNumber);
    this.result$.next(result);
    this.isRed$.next(!this.isRed$.value);
  }
}
