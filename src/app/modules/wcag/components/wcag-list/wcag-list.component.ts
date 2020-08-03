import {Component, Input, OnInit} from '@angular/core';
import {WcagService} from '../../../../core/services/wcag.service';
import {IWCAGItem} from '../../../../shared/interfaces/wcag-item';
import {BaseComponent} from '../../../../core/components/base/base.component';
import {IWcagFilterOptions} from '../../../../shared/interfaces/wcag-filter-options';
import {WcagUtils} from '../../utils/wcag.utils';

@Component({
  selector: 'app-wcag-list',
  templateUrl: './wcag-list.component.html',
  styleUrls: ['./wcag-list.component.scss']
})
export class WcagListComponent extends BaseComponent implements OnInit {

	private _filterOptions: IWcagFilterOptions;
	private _wcagItems: IWCAGItem[] = [];

	displayedWcagItems: IWCAGItem[] = [];

	@Input() set filterOptions(value: IWcagFilterOptions) {
		this._filterOptions = value;
		this.applyFilter();
	}

	get wcagItems(): IWCAGItem[] {
		return this._wcagItems;
	}

  	constructor(private wcagService: WcagService) {
  		super();
	}

	ngOnInit(): void {
  		super.ngOnInit();
  		this.getAllWcagItems();
	}

	private applyFilter(): void {
		if (!!this._filterOptions) {
			let filtered: IWCAGItem[] = this._wcagItems;

			if (this._filterOptions.levels.size > 0) {
				filtered = WcagUtils.filterItemsByLevel(filtered, this._filterOptions.levels);
			}

			if (this._filterOptions.tags.size > 0) {
				filtered = WcagUtils.filterItemsByTags(filtered, this._filterOptions.tags);
			}

			if (!!this._filterOptions.search) {
				filtered = WcagUtils.searchWcagItems(filtered, this._filterOptions.search);
			}

			if (!!this._filterOptions.sort) {
				filtered = WcagUtils.sortWcagItems(filtered, this._filterOptions.sort);
			}


			this.displayedWcagItems = filtered;
		} else {
			this.displayedWcagItems = this._wcagItems;
		}
	}

	private getAllWcagItems(): void {
  		this._wcagItems = this.wcagService.getAllWCAGItems();
  		this.applyFilter();
	}
}
