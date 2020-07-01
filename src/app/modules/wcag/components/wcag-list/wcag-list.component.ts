import {Component, Input, OnInit} from '@angular/core';
import {WcagService} from '../../../../core/services/wcag.service';
import {IWCAGItem} from '../../../../shared/interfaces/wcag-item';
import {BaseComponent} from '../../../../core/components/base/base.component';
import {WcagFilterOptions} from '../../../../shared/enums/wcag-filter';

@Component({
  selector: 'app-wcag-list',
  templateUrl: './wcag-list.component.html',
  styleUrls: ['./wcag-list.component.scss']
})
export class WcagListComponent extends BaseComponent implements OnInit {

	private _filterOptions: WcagFilterOptions;
	private _wcagItems: IWCAGItem[] = [];

	displayedWcagItems: IWCAGItem[] = [];

	@Input() set filterOptions(value: WcagFilterOptions) {
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
			// do filtering logic here
		}
		this.displayedWcagItems = this._wcagItems;
	}

	private getAllWcagItems(): void {
  		this._wcagItems = this.wcagService.getAllWCAGItems();
  		this.applyFilter();
	}
}
