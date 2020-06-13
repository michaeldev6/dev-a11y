import {Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {BaseComponent} from '../base/base.component';
import {FocusableIds} from '../../../shared/enums/focusable-ids';
import {KeyboardService} from '../../services/keyboard.service';
import {takeWhile} from 'rxjs/operators';
import {IRouteItem} from '../../../shared/interfaces/route-item';
import {PopOverPositions} from '../../../shared/enums/pop-over-positions';
import {PopOverComponent} from '../../../shared/components/pop-over/pop-over.component';
import {MAIN_NAV} from '../../../shared/constants/main-nav';
import {RoutingService} from '../../services/routing.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent implements OnInit {

	routeItems: IRouteItem[] = MAIN_NAV;

	menuPosition: PopOverPositions = PopOverPositions.BottomRight;
	currentRoute = '';
	mainNavigationId: FocusableIds = FocusableIds.MAIN_NAVIGATION;

	@ViewChild(PopOverComponent) popoverComponent: PopOverComponent;
	@ViewChildren('routeItem') links: QueryList<ElementRef>;

	constructor(
		private keyboardService: KeyboardService,
		private routingService: RoutingService
	) {
		super();
	}

	ngOnInit() {
		super.ngOnInit();
		this.getRoute();
	}

	getRoute(): void {
		this.routingService.getCurrentRoute()
			.pipe(takeWhile(() => this.active)	)
			.subscribe((route: string) => {
				this.currentRoute = route;
			});
	}

	onLinkClick(route: string): void {
		if (route !== this.currentRoute) {
			this.popoverComponent.close();
		}
	}
}
