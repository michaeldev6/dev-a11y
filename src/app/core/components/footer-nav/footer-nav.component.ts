import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../base/base.component';
import {IRouteItem} from '../../../shared/interfaces/route-item';
import {MAIN_NAV} from '../../../shared/constants/main-nav';
import {takeUntil} from 'rxjs/operators';
import {RoutingService} from '../../services/routing.service';

@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.scss']
})
export class FooterNavComponent extends BaseComponent implements OnInit {

	routeItems: IRouteItem[] = MAIN_NAV;

	currentRoute = '';

  	constructor(private routingService: RoutingService) {
		super();
	}

	ngOnInit() {
		super.ngOnInit();
		this.getRoute();
	}

	getRoute(): void {
		this.routingService.getCurrentRoute()
			.pipe(takeUntil(this._unsubscribe$))
			.subscribe((route: string) => {
				this.currentRoute = route;
			});
	}
}
