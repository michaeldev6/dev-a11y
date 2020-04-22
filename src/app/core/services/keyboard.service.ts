import { Injectable } from '@angular/core';
import {BehaviorSubject, fromEvent, Observable} from 'rxjs';
import {IKeypressEvent} from '../../shared/interfaces/keypress-event';
import {filter} from 'rxjs/operators';
import {WindowUtil} from '../../shared/utils/window.util';

@Injectable({
  providedIn: 'root'
})
export class KeyboardService {

  private _keypressed$: BehaviorSubject<IKeypressEvent> = new BehaviorSubject(null);

  constructor() {
    this.setupEventListeners();
  }

  getKeypressEvent(): Observable<IKeypressEvent> {
    return this._keypressed$
      .pipe(filter(event => !!event));
  }

  private setupEventListeners(): void {
    this.setupKeyDownListener();
  }

  private setupKeyDownListener(): void {
    fromEvent(WindowUtil.nativeDocument, 'keydown').subscribe((event: KeyboardEvent) => {
      const keypressEvent: IKeypressEvent = {
        keycode: event.which || event.keyCode,
        isShiftPressed: event.shiftKey,
        target: event.target
      };
      this._keypressed$.next(keypressEvent);

    });
  }
}
