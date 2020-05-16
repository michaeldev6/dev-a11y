import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {AnnouncerService} from './announcer.service';

@Injectable({
	providedIn: 'root'
})
export class FontSizeService {

	private _defaultFontSize = 16;
	private _minFontSize = 10;
	private _maxFontSize = 32;
	private _siteBaseFontSize = 16;
	private _fontSize$: BehaviorSubject<number> = new BehaviorSubject(this._defaultFontSize);

	constructor(
		private announcerService: AnnouncerService,
	) { }

	getSiteFontSize(): Observable<number> {
		return this._fontSize$;
	}

	resetFontSize(): void {
		this.updateSiteFontSize(this._defaultFontSize);
	}

  	updateSiteFontSize(size: number): void {
		let announcementText = `Text size set to ${size} pixels`;
		if (size !== this._siteBaseFontSize) {
			if (size < this._minFontSize) {
				announcementText = `Smallest text size set at ${this._minFontSize} pixels`;
				size = this._minFontSize;
			} else if (size > this._maxFontSize) {
				announcementText = `Largest text size set at ${this._maxFontSize} pixels`;
				size = this._maxFontSize;
			}
		}
		this._siteBaseFontSize = size;
		this.announcerService.triggerAnnouncement(announcementText);
		this._fontSize$.next(this._siteBaseFontSize);
  	}
}
