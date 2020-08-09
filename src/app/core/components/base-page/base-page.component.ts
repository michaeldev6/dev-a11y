import { OnInit } from '@angular/core';
import {BaseComponent} from '../base/base.component';
import {PageTitleService} from '../../services/page-title.service';
import {WindowUtil} from '../../../shared/utils/window.util';
import {SkipLinksService} from '../../services/skip-links.service';

export abstract class BasePageComponent extends BaseComponent implements OnInit {
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
		protected skipLinksService: SkipLinksService,
	) {
		super();
	}

	ngOnInit() {
		super.ngOnInit();
		WindowUtil.focusOnBody();
		this.updateSkipLinks();
	}

	updateSkipLinks(): void {
		this.skipLinksService.updateSkipLinks();
	}
}
