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
import { BehaviorSubject, combineLatest, Observable, Subscription } from 'rxjs';
import { map, startWith, take, withLatestFrom } from 'rxjs/operators';

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
  {
    title: 'Холодно & Горячо',
    route: Route['hot-and-cold'],
    parentRoute: Route.games,
  },
  {
    title: 'Am i cool?',
    route: Route['am-i-cool'],
    parentRoute: Route.projects,
  },
  {
    title: 'Секундомер',
    route: Route.stopwatch,
    parentRoute: Route.projects
  }
];

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class ExploreComponent {
  public readonly route: typeof Route = Route;
  public readonly searchControl: FormControl = new FormControl(null);
  public readonly filters$: BehaviorSubject<Route[]> = new BehaviorSubject([]);
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
    const colorsList: Color[] = [
      Color.blue,
      Color.red,
      Color.green,
      Color.orange,
      Color.orange,
    ];
    const randomIndex: number = Math.round(
      Math.random() * (colorsList.length - 1)
    );
    return colorsList[randomIndex];
  }

  public editFilter(filterType: Route): void {
    this.filters$.pipe(take(1)).subscribe((filters: Route[]) => {
      const filtersSet: Set<Route> = new Set(filters);
      filtersSet.has(filterType)
      ? filtersSet.delete(filterType)
      : filtersSet.add(filterType);
      const newFilters: Route[] = Array.from(filtersSet);
      this.filters$.next(newFilters);
    });
  }

  private getFilteredExploreList(): Observable<ExploreItem[]> {
    return combineLatest([
      this.searchControl.valueChanges.pipe(startWith(this.searchControl.value)),
      this.filters$,
    ]).pipe(
      map(([searchValue, filters]: [string, Route[]]) =>
        exploreList.filter((exploreItem: ExploreItem) => {
          const relateToSearch: boolean =
            isNil(searchValue) ||
            exploreItem?.title
              ?.toLowerCase()
              .includes(searchValue.toLowerCase());
          const relateToFilters: boolean =
            filters.length === 0 || filters.includes(exploreItem.parentRoute);
          return relateToSearch && relateToFilters;
        })
      )
    );
  }
}
