import {MEDIUM_VIEW} from '../constants/viewport-widths';

export class WindowUtil {

  public static get nativeWindow(): Window {
    return window;
  }

  public static get nativeNavigator(): Navigator {
    return navigator;
  }

  public static get nativeDocument(): Document {
    return document;
  }

  public static goBack(): void {
    this.nativeWindow.history.back();
  }

  public static isViewportSmall(): boolean {
    return !!this.nativeWindow ? this.nativeWindow.innerWidth <= MEDIUM_VIEW : false;
  }
}
