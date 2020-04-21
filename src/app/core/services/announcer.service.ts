import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {AssertiveStates} from '../../shared/enums/assertive-states';
import {IAnnouncementEvent} from '../../shared/interfaces/announcement-event';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnnouncerService {

  private _announcement$: BehaviorSubject<IAnnouncementEvent | null> = new BehaviorSubject(null);

  constructor() { }

  getAnnouncement(): Observable<IAnnouncementEvent> {
    return this._announcement$.pipe(filter(e => !!e));
  }

  triggerAnnouncement(text: string, assertiveState: AssertiveStates = AssertiveStates.ASSERTIVE): void {
    const event: IAnnouncementEvent = {
      text,
      assertiveState
    };
    this._announcement$.next(event);
  }
}
