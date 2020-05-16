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
	pageTitle = '';

	constructor(
		protected pageTitleService: PageTitleService,
	) {
		super();
	}

	ngOnInit() {
		super.ngOnInit();
		this.pageTitleService.updatePageTitle(this.pageTitle, !!this.pageTitle);
		WindowUtil.focusOnBody();
	}
}
