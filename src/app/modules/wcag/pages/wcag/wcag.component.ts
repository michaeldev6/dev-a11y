import { Component } from '@angular/core';
import {BasePageComponent} from '../../../../core/components/base-page/base-page.component';
import {IWcagFilterOptions} from '../../../../shared/interfaces/wcag-filter-options';

@Component({
	selector: 'app-wcag',
	templateUrl: './wcag.component.html',
	styleUrls: ['./wcag.component.scss']
})
export class WcagComponent extends BasePageComponent {
	pageTitle = 'WCAG Checklist';

	private _filterOptions: IWcagFilterOptions;
	get filterOptions(): IWcagFilterOptions {
		return this._filterOptions;
	}

	whenFilterUpdated(filter: IWcagFilterOptions): void {
		// to trigger the setter
		this._filterOptions = {...filter};
	}
}
