import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Color } from '@shared/enums/color.enum';
import { Route } from '@shared/enums/route.enum';
import { isNil } from '@shared/functions/is-nil.function';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface ExploreItem {
  title: string;
  route: Route;
  parentRoute: Route;
}

const exploreList: ExploreItem[] = [
  {
    title: 'Палитра',
    route: Route.palette,
    parentRoute: Route.design,
  },
  {
    title: 'Орёл & Решка',
    route: Route['heads-and-tails'],
    parentRoute: Route.games,
  },
];

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class ExploreComponent {
  public readonly searchControl: FormControl = new FormControl(null);
  public readonly exploreList$: Observable<ExploreItem[]> =
    this.getFilteredExploreList();
  public readonly isEmptySearchResult$: Observable<boolean> =
    this.exploreList$.pipe(
      map(
        (exploreList: ExploreItem[]) =>
          Array.isArray(exploreList) && exploreList.length === 0
      )
    );

  constructor(private readonly router: Router) {}

  public openPage(exploreItem: ExploreItem): void {
    const url: string = `${exploreItem.parentRoute}/${exploreItem.route}`;
    this.router.navigateByUrl(url);
  }

  public getRandomColor(): Color {
    const colorsList: Color[] = [Color.blue, Color.red, Color.green, Color.orange, Color.orange];
    const randomIndex: number = Math.round(Math.random() * (colorsList.length - 1));
    return colorsList[randomIndex];
  }

  private getFilteredExploreList(): Observable<ExploreItem[]> {
    return this.searchControl.valueChanges.pipe(
      startWith(this.searchControl.value),
      map((searchValue: string) =>
        isNil(searchValue)
          ? exploreList
          : exploreList.filter((exploreItem: ExploreItem) =>
              exploreItem?.title
                ?.toLowerCase()
                .includes(searchValue.toLowerCase())
            )
      )
    );
  }
}
