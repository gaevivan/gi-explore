import { Color } from "@shared/enums/color.enum";

export namespace ColorModeActions {
  export class Cache {
    public static readonly type: string = '[ColorModeActions] Cache';
    constructor(public readonly color: Color.bgdark | Color.bglight) {}
  }
}
