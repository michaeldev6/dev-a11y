import {ElementRef, Injectable} from '@angular/core';
import {FocusableIds} from '../../shared/enums/focusable-ids';

@Injectable({
  providedIn: 'root'
})
export class FocusService {

	private focusableElements: {[key: string]: ElementRef} = {};

	constructor() { }

	focusOnElement(id: FocusableIds): void {
		if (!!this.getFocusableElement(id)) {
			this.getFocusableElement(id).nativeElement.focus();
		}
	}

	getFocusableElement(id: FocusableIds): ElementRef | undefined {
		return this.focusableElements[id];
	}

	registerFocusableElement(id: FocusableIds, el: ElementRef): void {
		if (!this.getFocusableElement(id)) {
			this.focusableElements[id] = el;
		}
	}

	unregisterFocusableElement(id: FocusableIds): void {
		if (!!this.getFocusableElement(id)) {
			delete this.focusableElements[id];
		}
	}
}
