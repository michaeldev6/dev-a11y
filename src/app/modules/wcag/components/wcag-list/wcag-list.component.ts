import {Component, OnInit} from '@angular/core';
import {WcagService} from '../../../../core/services/wcag.service';
import {IWCAGItem} from '../../../../shared/interfaces/wcag-item';
import {BaseComponent} from '../../../../core/components/base/base.component';
import {IWcagFilterOptions} from '../../../../shared/interfaces/wcag-filter-options';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-wcag-list',
  templateUrl: './wcag-list.component.html',
  styleUrls: ['./wcag-list.component.scss']
})
export class WcagListComponent extends BaseComponent implements OnInit {

	private _filterOptions: IWcagFilterOptions;
	private _wcagItems: IWCAGItem[] = [];
	get wcagItems(): IWCAGItem[] {
		return this._wcagItems;
	}

	displayedWcagItems: IWCAGItem[] = [];

  	constructor(private wcagService: WcagService) {
  		super();
	}

	ngOnInit(): void {
  		super.ngOnInit();
  		this.listenToFilterUpdates();
  		this.getAllWcagItems();
	}

	private applyFilter(): void {
		if (!!this._filterOptions) {
			this.displayedWcagItems = this.wcagService.getFilteredItems(this._filterOptions);
		} else {
			this.displayedWcagItems = this._wcagItems;
		}
	}

	private getAllWcagItems(): void {
  		this._wcagItems = this.wcagService.getAllWCAGItems();
  		this.applyFilter();
	}

	private listenToFilterUpdates(): void {
		this.wcagService.listenToWcagFilterUpdates()
			.pipe(takeUntil(this._unsubscribe$))
			.subscribe((filterOption:IWcagFilterOptions) => {
				this._filterOptions = filterOption;
				this.applyFilter();
			});
	}
}
