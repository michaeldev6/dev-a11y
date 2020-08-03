import {Injectable} from '@angular/core';
import {WCAGGuidelines} from '../../shared/constants/wcag/guidelines/wcag-guidelines';
import {IWCAGItem} from '../../shared/interfaces/wcag-item';
import {WCAGLevel} from '../../shared/enums/wcag-levels';
import {WCAGIds} from '../../shared/enums/wcag-ids';
import {CommonUtil} from '../../shared/utils/common.util';
import {WCAGItemTag} from '../../shared/enums/wcag-tags';

@Injectable({
	providedIn: 'root'
})
export class WcagService {

	private _wcagIds: string[] = Object.keys(WCAGGuidelines);
	private _wcagLevels: WCAGLevel[] = [];
	private _wcagTags: WCAGItemTag[] = [];

	constructor() {
		this.convertEnumsToLists();
	}

	private convertEnumsToLists(): void {
		this._wcagLevels = CommonUtil.makeListFromEnum(WCAGLevel) as WCAGLevel[];
		this._wcagTags = CommonUtil.makeListFromEnum(WCAGItemTag) as WCAGItemTag[];
	}

	getWCAGIds(): string[] {
		return this._wcagIds;
	}

	getAllWCAGItems(): IWCAGItem[] {
		return this._wcagIds.map((id: string) => WCAGGuidelines[id]);
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

	getWcagTags(): WCAGItemTag[] {
		return this._wcagTags;
	}
}
