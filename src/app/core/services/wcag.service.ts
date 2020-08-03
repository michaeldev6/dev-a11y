import {Injectable} from '@angular/core';
import {WCAGGuidelines} from '../../shared/constants/wcag/guidelines/wcag-guidelines';
import {IWCAGItem} from '../../shared/interfaces/wcag-item';
import {WCAGLevel} from '../../shared/enums/wcag-levels';
import {WCAGIds} from '../../shared/enums/wcag-ids';
import {CommonUtil} from '../../shared/utils/common.util';
import {WCAGItemTag} from '../../shared/enums/wcag-tags';
import {IWcagFilterOptions} from '../../shared/interfaces/wcag-filter-options';
import {BehaviorSubject, Observable} from 'rxjs';
import {WcagFilterSortOptions} from '../../shared/enums/wcag-filter';

@Injectable({
	providedIn: 'root'
})
export class WcagService {

	private _wcagIds: string[] = Object.keys(WCAGGuidelines);
	private _wcagLevels: WCAGLevel[] = [];
	private _wcagTags: WCAGItemTag[] = [];

	private _wcagListFilters: IWcagFilterOptions = {
		search: '',
		sort: WcagFilterSortOptions.BY_ID_ASC,
		levels: new Set<WCAGLevel>(),
		tags: new Set<WCAGItemTag>(),
	};
	private _wcagListFilters$: BehaviorSubject<IWcagFilterOptions> = new BehaviorSubject<IWcagFilterOptions>(this._wcagListFilters);

	constructor() {
		this.convertEnumsToLists();
	}

	private convertEnumsToLists(): void {
		this._wcagLevels = CommonUtil.makeListFromEnum(WCAGLevel) as WCAGLevel[];
		this._wcagTags = CommonUtil.makeListFromEnum(WCAGItemTag) as WCAGItemTag[];
	}

	getAllWCAGItems(): IWCAGItem[] {
		return this._wcagIds.map((id: string) => WCAGGuidelines[id]);
	}

	getWCAGIds(): string[] {
		return this._wcagIds;
	}

	getWcagItem(id: WCAGIds): IWCAGItem {
		return WCAGGuidelines[id];
	}

	getWCAGLevelAItems(): IWCAGItem[] {
		return this.getAllWCAGItems().filter((item: IWCAGItem) => item.level === WCAGLevel.A);
	}

	getWCAGLevelAAItems(): IWCAGItem[] {
		return this.getAllWCAGItems().filter((item: IWCAGItem) => item.level === WCAGLevel.AA);
	}

	getWCAGLevelAAAItems(): IWCAGItem[] {
		return this.getAllWCAGItems().filter((item: IWCAGItem) => item.level === WCAGLevel.AAA);
	}

	getWcagLevels(): WCAGLevel[] {
		return this._wcagLevels;
	}

	listenToWcagFilterUpdates(): Observable<IWcagFilterOptions> {
		return this._wcagListFilters$;
	}

	updateWcagListFilter(options: IWcagFilterOptions): void {
		this._wcagListFilters = options;
		this._wcagListFilters$.next(this._wcagListFilters);
	}

	getWcagTags(): WCAGItemTag[] {
		return this._wcagTags;
	}
}
