import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { isNil } from '@shared/functions/is-nil.function';
import { BehaviorSubject, Observable, Subscription, timer } from 'rxjs';
import { map, take, withLatestFrom } from 'rxjs/operators';

const INIT_TIME: Date = new Date(0, 0, 0);

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StopwatchComponent {
  public readonly time$: BehaviorSubject<Date> = new BehaviorSubject<Date>(
    INIT_TIME
  );
  public readonly subscription$: BehaviorSubject<Subscription | null> =
    new BehaviorSubject<null>(null);
  public readonly isStartDisabled$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public readonly isPauseDisabled$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);
  public readonly isResetDisabled$: Observable<boolean> = this.time$.pipe(
    map((time) => time === INIT_TIME)
  );

  constructor() {}

  public onDestroy(): void {
    this.unsubscribe();
  }

  public reset(): void {
    this.pause();
    this.time$.next(INIT_TIME);
  }

  public start(): void {
    this.isStartDisabled$.next(true);
    const newSubscription: Subscription = timer(1000, 1000)
      .pipe(withLatestFrom(this.time$, this.isPauseDisabled$))
      .subscribe(([_, time, isPauseDisabled]) => {
        if (isPauseDisabled) {
          this.isPauseDisabled$.next(false);
        }
        const newTime: Date = new Date(
          null,
          null,
          null,
          null,
          null,
          time.getSeconds() + 1
        );
        this.time$.next(newTime);
      });
    this.subscription$.next(newSubscription);
  }

  public pause(): void {
    this.isPauseDisabled$.next(true);
    this.isStartDisabled$.next(false);
    this.unsubscribe();
  }

  private unsubscribe(): void {
    this.subscription$.pipe(take(1)).subscribe((subscription: Subscription) => {
      if (isNil(subscription)) {
        return;
      }
      subscription.unsubscribe();
    });
  }
}
