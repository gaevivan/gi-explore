import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Route } from '@shared/enums/route.enum';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  public notExplore$: Observable<boolean> = this.router.events.pipe(
    map(() => {
      return !this.router.url.includes(Route.explore);
    })
  );

  constructor(private readonly router: Router, titleService: Title) {
    titleService.setTitle('Explore gi-projects');
  }

  public toList(): void {
    this.router.navigateByUrl('/');
  }
}
