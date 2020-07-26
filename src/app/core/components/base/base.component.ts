import { OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

export abstract class BaseComponent implements OnInit, OnDestroy {

	private static id = 0;
	cid = 0;
	active = false;
	protected _unsubscribe$: Subject<void> = new Subject<void>();

	ngOnInit() {
		BaseComponent.id++;
		this.cid = BaseComponent.id;
		this.active = true;
	}

	ngOnDestroy(): void {
		this.active = false;
		this._unsubscribe$.next();
		this._unsubscribe$.complete();
	}

	trackByFn(index, item) {
		return index;
	}
}
