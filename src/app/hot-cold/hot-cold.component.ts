import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { isNil } from '@shared/functions/is-nil.function';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, pairwise, startWith, take } from 'rxjs/operators';

const ROW_SIZE: number = 5;

enum Status {
  cold = 'Холодно',
  colder = 'Холоднее',
  hot = 'Горячо',
  hotter = 'Горячее',
  success = 'Успех',
}

function getDistance(clicked: number, target: number): number {
  const clickedRowIndex = Math.floor(clicked / 5) + 1;
  const clickedColIndex = clicked % 5;
  const targetRowIndex = Math.floor(target / 5) + 1;
  const targetColIndex = target % 5;
  const rowDiff: number = Math.abs(targetRowIndex - clickedRowIndex);
  const colDiff: number = Math.abs(targetColIndex - clickedColIndex);
  return rowDiff > colDiff ? rowDiff : colDiff;
}

@Component({
  selector: 'app-hot-cold',
  templateUrl: './hot-cold.component.html',
  styleUrls: ['./hot-cold.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class HotColdComponent {
  public readonly openedSet: Set<number> = new Set();
  public readonly cellsList$: BehaviorSubject<boolean[]> = new BehaviorSubject<
    boolean[]
  >(null);
  public readonly clickedIndex$: BehaviorSubject<number> = new BehaviorSubject<number>(
    null
  );
  public readonly status$: Observable<Status> = this.clickedIndex$.pipe(
    startWith(null),
    pairwise(),
    map(([prev, curr]: [number, number]) => {
      if (isNil(curr)) {
        return null;
      }
      const targetIndex: number = this.cellsList$.value.indexOf(true);
      const prevDistance: number = getDistance(prev, targetIndex);
      const currDistance: number = getDistance(curr, targetIndex);
      if (currDistance === 0) {
        return Status.success;
      }
      if (currDistance === 1) {
        return Status.hot;
      }
      if (isNil(prev) || currDistance === prevDistance) {
        return Status.cold;
      }
      if (currDistance > prevDistance) {
        return Status.colder;
      }
      return Status.hotter;
    })
  );
  public readonly message$: Observable<string> = this.clickedIndex$.pipe(
    map((value: number) =>
      isNil(value) ? null : `сделано кликов: ${this.openedSet.size}`
    )
  );
  public readonly isStatusSuccess$: Observable<boolean> = this.status$.pipe(
    map((status: Status) => status === Status.success)
  );

  constructor() {}

  public open(index: number): void {
    this.isStatusSuccess$.pipe(take(1)).subscribe((isSuccess: boolean) => {
      if (isSuccess) {
        return;
      }
      this.openedSet.add(index);
      this.clickedIndex$.next(index);
    });
  }

  public start(): void {
    const size: number = Math.pow(ROW_SIZE, 2);
    const cellsList: boolean[] = new Array(size).fill(false);
    const randomIndex: number = Math.floor(Math.random() * size);
    cellsList[randomIndex] = true;
    this.openedSet.clear();
    this.cellsList$.next(cellsList);
    this.clickedIndex$.next(null);
  }
}
