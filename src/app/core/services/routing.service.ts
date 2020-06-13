import { Injectable } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

	private _currentRoute: string;
	private _currentRoute$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

	constructor(
		private router: Router,
	) {
		this.setupRouteChangeListener();
	}

	private setupRouteChangeListener(): void {
		this.router.events
			.pipe(filter(event => event instanceof NavigationEnd))
			.subscribe((event: NavigationEnd) => {
				this._currentRoute = event.url;
				this._currentRoute$.next(this._currentRoute);
			});
	}

	getCurrentRoute(): Observable<string> {
		return this._currentRoute$
			.pipe(filter(r => !!r));
	}
}
