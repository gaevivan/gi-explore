import { Injectable } from '@angular/core';
import { Color } from '@shared/enums/color.enum';

@Injectable({
  providedIn: 'root',
})
export class RandomColorService {
  private color: Color = null;

  public getColor(): Color {
    const colorsList: Color[] = Object.values(Color).filter((color) => color !== this.color);
    const randomIndex: number = Math.round(
      Math.random() * (colorsList.length - 1)
    );
    this.color = colorsList[randomIndex];
    return this.color;
  }
}
