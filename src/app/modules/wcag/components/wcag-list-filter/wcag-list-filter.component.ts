import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../../../../core/components/base/base.component';
import {ISelectOptions} from '../../../../shared/interfaces/a11y-select';
import {WcagFilterDisplayOptions} from '../../../../shared/enums/wcag-filter';
import {WCAGLevel} from '../../../../shared/enums/wcag-levels';
import {CheckboxState} from '../../../../shared/enums/a11y-checkbox';
import {WcagService} from '../../../../core/services/wcag.service';
import {WCAGItemTag} from '../../../../shared/enums/wcag-tags';

@Component({
	selector: 'app-wcag-list-filter',
	templateUrl: './wcag-list-filter.component.html',
	styleUrls: ['./wcag-list-filter.component.scss']
})
export class WcagListFilterComponent extends BaseComponent implements OnInit {

	readonly displayOptions: ISelectOptions = [
		{
			label: 'Order by Ids',
			value: WcagFilterDisplayOptions.BY_ID
		},
		{
			label: 'Group By Levels',
			value: WcagFilterDisplayOptions.BY_LEVELS
		}
	];

	readonly wcagLevels: WCAGLevel[];
	readonly wcagTags: WCAGItemTag[];

	constructor(private wcagService: WcagService) {
		super();
		this.wcagLevels = this.wcagService.getWcagLevels();
		this.wcagTags = this.wcagService.getWcagTags();
	}


	onWcagLevelChecked(checked: CheckboxState, level: WCAGLevel): void {
		console.log(`${level}: ${checked}`);
	}

	onWcagTagChecked(checked: CheckboxState, tag: WCAGItemTag): void {
		console.log(`${tag}: ${checked}`);
	}
}
