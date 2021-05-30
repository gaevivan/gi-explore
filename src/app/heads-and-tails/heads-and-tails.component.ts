import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  ViewEncapsulation,
} from '@angular/core';
import { Color } from '@shared/enums/color.enum';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-heads-and-tails',
  templateUrl: './heads-and-tails.component.html',
  styleUrls: ['./heads-and-tails.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class HeadsAndTailsComponent {
  public readonly result$: BehaviorSubject<string> = new BehaviorSubject<string>(
    null
  );
  public readonly color$: BehaviorSubject<Color.red | Color.blue> = new BehaviorSubject<Color.red>(Color.red);

  @HostListener('click')
  public toss(): void {
    window.getSelection().removeAllRanges();
    const randomNumber: number = Math.round(Math.random());
    const result: string = Boolean(randomNumber) ? 'Орёл' : 'Решка';
    this.color$.pipe(take(1)).subscribe((color: Color) => this.color$.next(color === Color.red ? Color.blue: Color.red))
    this.result$.next(result);
  }
}
