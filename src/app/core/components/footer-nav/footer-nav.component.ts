import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../base/base.component';
import {IRouteItem} from '../../../shared/interfaces/route-item';
import {MAIN_NAV} from '../../../shared/constants/main-nav';
import {takeWhile} from 'rxjs/operators';
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
			.pipe(takeWhile(() => this.active))
			.subscribe((route: string) => {
				this.currentRoute = route;
			});
	}
}
