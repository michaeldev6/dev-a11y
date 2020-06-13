import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../base/base.component';
import {IRouteItem} from '../../../shared/interfaces/route-item';
import {MAIN_NAV} from '../../../shared/constants/main-nav';
import {filter, takeWhile} from 'rxjs/operators';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.scss']
})
export class FooterNavComponent extends BaseComponent implements OnInit {

	routeItems: IRouteItem[] = MAIN_NAV;

	currentRoute = '';

  	constructor(private router: Router) {
		super();
	}

	ngOnInit() {
		super.ngOnInit();
		this.getRoute();
	}

	getRoute(): void {
		this.router.events
			.pipe(
				filter(event => event instanceof NavigationEnd),
				takeWhile(() => this.active),
			)
			.subscribe((event: NavigationEnd) => {
				this.currentRoute = event.url;
			});
	}
}
