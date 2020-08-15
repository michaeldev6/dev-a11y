import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BaseComponent} from '../../../../core/components/base/base.component';
import {ISelectOption, ISelectOptions} from '../../../../shared/interfaces/a11y-select';
import {WcagFilterSortOptions} from '../../../../shared/enums/wcag-filter';
import {WCAGLevel} from '../../../../shared/enums/wcag-levels';
import {CheckboxState} from '../../../../shared/enums/a11y-checkbox';
import {WcagService} from '../../../../core/services/wcag.service';
import {WCAGItemTag} from '../../../../shared/enums/wcag-tags';
import {IWcagFilterOptions} from '../../../../shared/interfaces/wcag-filter-options';
import {take, takeUntil} from 'rxjs/operators';

@Component({
	selector: 'app-wcag-list-filter',
	templateUrl: './wcag-list-filter.component.html',
	styleUrls: ['./wcag-list-filter.component.scss']
})
export class WcagListFilterComponent extends BaseComponent implements OnInit {

	readonly checkboxState: typeof CheckboxState = CheckboxState;

	readonly sortOptions: ISelectOptions = [
		{
			label: 'Order by Ids (ASC)',
			value: WcagFilterSortOptions.BY_ID_ASC
		},
		{
			label: 'Order by Ids (DESC)',
			value: WcagFilterSortOptions.BY_ID_DESC
		},
		{
			label: 'Group By Levels (ASC)',
			value: WcagFilterSortOptions.BY_LEVELS_ASC
		},
		{
			label: 'Group By Levels (DESC)',
			value: WcagFilterSortOptions.BY_LEVELS_DESC
		},
	];

	readonly wcagLevels: WCAGLevel[];
	readonly wcagTags: WCAGItemTag[];

	private _appliedFilters: IWcagFilterOptions;
	get appliedFilters(): IWcagFilterOptions {
		return this._appliedFilters;
	}

	private _selectedDisplayOption: ISelectOption;
	get selectedDisplayOption(): ISelectOption {
		return this._selectedDisplayOption;
	}

	constructor(private wcagService: WcagService) {
		super();
		this.wcagLevels = this.wcagService.getWcagLevels();
		this.wcagTags = this.wcagService.getWcagTags();
	}

	ngOnInit() {
		super.ngOnInit();
		this.getFilterOptions();
	}

	private getFilterOptions(): void {
		this.wcagService.listenToWcagFilterUpdates()
			.pipe(
				take(1),
				takeUntil(this._unsubscribe$)
			)
			.subscribe((filters: IWcagFilterOptions) => {
				this._appliedFilters = filters;
				this._selectedDisplayOption = this.sortOptions.find((option: ISelectOption) => {
					return option.value === this._appliedFilters.sort;
				}) as ISelectOption;
			})
	}

	resetFilters(): void {
		if (this._appliedFilters) {
			this._appliedFilters.search = '';
			this._appliedFilters.sort = WcagFilterSortOptions.BY_ID_ASC;
			this._appliedFilters.levels.clear();
			this._appliedFilters.tags.clear();
		}

		this._selectedDisplayOption = this.sortOptions[0] as ISelectOption;
	}

	private updateSelectedFilters(): void {
		this.wcagService.updateWcagListFilter(this._appliedFilters);
	}

	whenFilterChanged(filter: string): void {
		this._appliedFilters.search = filter;
		this.updateSelectedFilters();
	}

	whenOptionSelected(option: ISelectOption): void {
		this._selectedDisplayOption = option;
		this._appliedFilters.sort = option.value as WcagFilterSortOptions;
		this.updateSelectedFilters();
	}

	whenWcagLevelChecked(checked: CheckboxState, level: WCAGLevel): void {
		if (checked === CheckboxState.Checked) {
			this._appliedFilters.levels.add(level);
		} else {
			this._appliedFilters.levels.delete(level);
		}
		this.updateSelectedFilters();
	}

	whenWcagTagChecked(checked: CheckboxState, tag: WCAGItemTag): void {
		if (checked === CheckboxState.Checked) {
			this._appliedFilters.tags.add(tag);
		} else {
			this._appliedFilters.tags.delete(tag);
		}
		this.updateSelectedFilters();
	}
}
