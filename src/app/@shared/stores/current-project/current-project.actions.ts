import { Locale } from "@shared/enums/locale.enum";
import { CurrentProject } from "@shared/interfaces/current-project.interface";

export namespace CurrentProjectActions {
  export class Cache {
    public static readonly type: string = '[CurrentProjectActions] Cache';
    constructor(public readonly currentProject: CurrentProject) {}
  }

  export class SetDarkMode {
    public static readonly type: string = '[CurrentProjectActions] SetDarkMode';
    constructor(public readonly isDarkModeOn: boolean) {}
  }

  export class SetLocale {
    public static readonly type: string = '[CurrentProjectActions] SetLocale';
    constructor(public readonly locale: Locale) {}
  }
}
