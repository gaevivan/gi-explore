import { Injectable } from "@angular/core";
import { Action, createSelector, State, StateContext } from "@ngxs/store";
import { Color } from "@shared/enums/color.enum";
import { Observable, of } from "rxjs";
import { ColorModeActions } from "./color-mode.actions";

type StateType = Color;

@State<StateType>({
  name: 'ColorModeState',
  defaults: Color.bglight,
})
@Injectable()
export class ColorModeState {
  @Action(ColorModeActions.Cache)
  public cache(context: StateContext<StateType>, { color }: ColorModeActions.Cache): Observable<void> {
    context.setState(color);
    return of(void 0);
  }

  public static getTextColor(): (color: StateType) => StateType {
    return createSelector([this], (color: StateType) =>
      color === Color.bgdark ? Color.bglight : Color.bgdark
    );
  }
  
}
