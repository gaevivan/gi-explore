import { Directive, ElementRef, HostListener } from '@angular/core';
import { RandomColorService } from '@shared/services/random-color.service';

@Directive({
  selector: '[randomColor]',
})
export class RandomColorDirective {
  public readonly initialColor: string = this.elementRef.nativeElement.style.color;

  constructor(
    private readonly randomColorService: RandomColorService,
    private readonly elementRef: ElementRef) {}

  @HostListener('mouseenter')
  private mouseEnter(): void {
    this.elementRef.nativeElement.style.color = this.randomColorService.getColor();
  }

  @HostListener('mouseleave')
  private mouseLeave(): void {
    this.elementRef.nativeElement.style.color = this.initialColor;
  }
}
