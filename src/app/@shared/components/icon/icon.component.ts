import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  OnChanges,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { isNil } from '@shared/functions/is-nil.function';
import { ComponentChanges } from '@shared/interfaces/component-changes.interface';
import { IconDefinition } from '@shared/interfaces/icon-definition.interface';
import { BehaviorSubject } from 'rxjs';
import * as iconsList from './../../constants/icons/api';

const ICONS: IconDefinition[] = Object.values(iconsList);

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements OnChanges {
  @Input() public readonly name: string;
  @Input() public readonly src: string;
  public readonly innerHtml$: BehaviorSubject<SafeHtml> = new BehaviorSubject(null);

  constructor(private readonly domSanitizer: DomSanitizer) {}

  public ngOnChanges(changes: ComponentChanges<this>): void {
    const name: string = changes?.name?.currentValue ?? null;
    const src: string = changes?.src?.currentValue ?? null;
    this.setInnerHtml(name, src);
  }

  private getIconDataByName(name: string): string {
    const foundIcon: IconDefinition = ICONS.find(
      (icon: IconDefinition) => icon.name === name
    );
    return foundIcon.data;
  }

  private setInnerHtml(name: string, src: string): void {
    const data: string = isNil(name) ? src : this.getIconDataByName(name);
    const safeHtml: SafeHtml = this.domSanitizer.bypassSecurityTrustHtml(data);
    this.innerHtml$.next(safeHtml);
  }
}
