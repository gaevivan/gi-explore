import { Injectable } from '@angular/core';
import { Action, createSelector, State, StateContext } from '@ngxs/store';
import { Color } from '@shared/enums/color.enum';
import { Locale } from '@shared/enums/locale.enum';
import { getColorByDarkMode } from '@shared/functions/get-color-by-dark-mode.function';
import { CurrentProject } from '@shared/interfaces/current-project.interface';
import { Observable, of } from 'rxjs';
import { CurrentProjectActions } from './current-project.actions';

type StateType = CurrentProject;

const DEFAULT_CURRENT_PROJECT_STATE: CurrentProject = {
  isDarkModeOn: false,
  locale: Locale.ru,
};

@State<StateType>({
  name: 'CurrentProjectState',
  defaults: DEFAULT_CURRENT_PROJECT_STATE,
})
@Injectable()
export class CurrentProjectState {
  @Action(CurrentProjectActions.Cache)
  public cache(
    context: StateContext<StateType>,
    { currentProject }: CurrentProjectActions.Cache
  ): Observable<void> {
    context.setState(currentProject);
    return of(void 0);
  }

  @Action(CurrentProjectActions.SetDarkMode)
  public setDarkMode(
    context: StateContext<StateType>,
    { isDarkModeOn }: CurrentProjectActions.SetDarkMode
  ): Observable<void> {
    const currentProject: CurrentProject =
      context.getState() ?? DEFAULT_CURRENT_PROJECT_STATE;
    context.setState({ ...currentProject, isDarkModeOn });
    return of(void 0);
  }

  @Action(CurrentProjectActions.SetLocale)
  public setLocale(
    context: StateContext<StateType>,
    { locale }: CurrentProjectActions.SetLocale
  ): Observable<void> {
    const currentProject: CurrentProject =
      context.getState() ?? DEFAULT_CURRENT_PROJECT_STATE;
    context.setState({ ...currentProject, locale });
    return of(void 0);
  }

  public static getTextColor(): (
    currentProject: StateType
  ) => Color.bglight | Color.bgdark {
    return createSelector([this], (currentProject: StateType) =>
      getColorByDarkMode(currentProject.isDarkModeOn, 'text')
    );
  }

  public static getBgColor(): (
    currentProject: StateType
  ) => Color.bglight | Color.bgdark {
    return createSelector([this], (currentProject: StateType) =>
      getColorByDarkMode(currentProject.isDarkModeOn)
    );
  }

  public static getDarkMode(): (currentProject: StateType) => boolean {
    return createSelector(
      [this],
      (currentProject: StateType) => currentProject.isDarkModeOn
    );
  }

  public static getLocale(): (currentProject: StateType) => Locale {
    return createSelector(
      [this],
      (currentProject: StateType) => currentProject.locale
    );
  }
}
