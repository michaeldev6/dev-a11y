import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../base/base.component';
import {PageTitleService} from '../../services/page-title.service';
import {WindowUtil} from '../../../shared/utils/window.util';

@Component({
	selector: 'app-base-page',
	template: '',
	styleUrls: []
})
export class BasePageComponent extends BaseComponent implements OnInit {
	private _pageTitle = '';

	set pageTitle(title: string) {
		if (!!title && title.length > 0) {
			this._pageTitle = title;
			this.pageTitleService.updatePageTitle(this._pageTitle, !!this._pageTitle);
		}
	}

	get pageTitle(): string {
		return this._pageTitle;
	}

	constructor(
		protected pageTitleService: PageTitleService,
	) {
		super();
	}

	ngOnInit() {
		super.ngOnInit();
		WindowUtil.focusOnBody();
	}
}
