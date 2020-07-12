import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../../../../core/components/base/base.component';
import {ISelectOptions} from '../../../../shared/interfaces/a11y-select';
import {WcagFilterOptions} from '../../../../shared/enums/wcag-filter';

@Component({
	selector: 'app-wcag-list-filter',
	templateUrl: './wcag-list-filter.component.html',
	styleUrls: ['./wcag-list-filter.component.scss']
})
export class WcagListFilterComponent extends BaseComponent implements OnInit {
	displayOptions: ISelectOptions = [
		{
			label: 'Order by Ids',
			value: WcagFilterOptions.BY_ID
		},
		{
			label: 'Group By Levels',
			value: WcagFilterOptions.BY_LEVELS
		}
	]
}
