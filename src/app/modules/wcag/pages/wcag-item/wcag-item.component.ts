import { Component, OnInit } from '@angular/core';
import {BasePageComponent} from '../../../../core/components/base-page/base-page.component';
import {PageTitleService} from '../../../../core/services/page-title.service';
import {ActivatedRoute, Data} from '@angular/router';
import {IWCAGItem} from '../../../../shared/interfaces/wcag-item';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-wcag-item',
  templateUrl: './wcag-item.component.html',
  styleUrls: ['./wcag-item.component.scss']
})
export class WcagItemComponent extends BasePageComponent implements OnInit {

	wcagItem: IWCAGItem;

	constructor(
		protected pageTitleService: PageTitleService,
		private route: ActivatedRoute,
	) {
		super(pageTitleService);
	}

	ngOnInit() {
		super.ngOnInit();
		this.getWcagItem();
		this.setPageTitle();
	}

	private getWcagItem(): void {
		this.route.data
			.pipe(takeUntil(this._unsubscribe$))
			.subscribe((data:Data) => {
				if (!!data['wcagItem']) {
					this.wcagItem = data['wcagItem'];
				}
			});
	}

	private setPageTitle(): void {
		if (!!this.wcagItem) {
			this.pageTitle = `${this.wcagItem.id} - ${this.wcagItem.name}`;
		} else {
			this.pageTitle = 'Given WCAG Id does not exist';
		}
	}
}
