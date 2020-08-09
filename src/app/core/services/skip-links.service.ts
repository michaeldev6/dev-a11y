import {Injectable} from '@angular/core';
import {ISkipLink} from '../../shared/interfaces/skip-link';
import {FocusableIds} from '../../shared/enums/focusable-ids';
import {BehaviorSubject, Observable} from 'rxjs';

export const DefaultSkipLinks: ISkipLink[] = [
	{
		text: 'Skip to main navigation',
		id: FocusableIds.MAIN_NAVIGATION
	},
	{
		text: 'Skip to main content',
		id: FocusableIds.MAIN_CONTENT_HEADING
	},
	{
		text: 'Skip to footer',
		id: FocusableIds.FOOTER
	}
];

@Injectable({
  providedIn: 'root'
})
export class SkipLinksService {

  private skipLinks = DefaultSkipLinks;
  private _skipLinks$: BehaviorSubject<ISkipLink[]> = new BehaviorSubject(DefaultSkipLinks);

  constructor() { }

  getSkipLinks(): Observable<ISkipLink[]> {
    return this._skipLinks$;
  }

  updateSkipLinks(skipLinks: ISkipLink[] = DefaultSkipLinks): void {
    this.skipLinks = skipLinks;
    this._skipLinks$.next(this.skipLinks);
  }
}
