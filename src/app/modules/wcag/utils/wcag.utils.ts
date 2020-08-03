import {IWCAGItem} from '../../../shared/interfaces/wcag-item';
import {WCAGLevel} from '../../../shared/enums/wcag-levels';
import {WCAGItemTag} from '../../../shared/enums/wcag-tags';
import {WcagFilterSortOptions} from '../../../shared/enums/wcag-filter';

export class WcagUtils {
	public static filterItemsByLevel(items: IWCAGItem[], levels: Set<WCAGLevel>): IWCAGItem[] {
		return items.filter(item => levels.has(item.level));
	}

	public static filterItemsByTags(items: IWCAGItem[], selectedTags: Set<WCAGItemTag>): IWCAGItem[] {
		return items.filter((item: IWCAGItem) => {
			let hasTag = false;
			if (item.tags.length > 0 && selectedTags.size > 0) {
				item.tags.forEach((tag: WCAGItemTag) => {
					if (selectedTags.has(tag)) {
						hasTag = true;
					}
				});
			}
			return hasTag;
		});
	}

	public static searchWcagItems(items: IWCAGItem[], query: string): IWCAGItem[] {
		return items.filter((item: IWCAGItem) => {
			let queryFound = false;
			if (
				item.name.toLowerCase().includes(query.toLowerCase())
				|| item.description.toLowerCase().includes((query.toLowerCase()))
				|| item.purpose.toLowerCase().includes((query.toLowerCase()))
				|| item.id.replace(/\./g, '').includes(query) // check id without periods
				|| item.id.toString().includes(query) // check id with periods
			) {
				queryFound = true;
			}
			return queryFound;
		});
	}

	public static sortWcagItems(items: IWCAGItem[], sort: WcagFilterSortOptions): IWCAGItem[] {
		items.sort((a: IWCAGItem, b: IWCAGItem) => {
			switch (sort) {
				case WcagFilterSortOptions.BY_ID_ASC:
					return a.id > b.id ? 1 : a.id < b.id ? -1 : 0;
				case WcagFilterSortOptions.BY_ID_DESC:
					return b.id > a.id ? 1 : b.id < a.id ? -1 : 0;
				case WcagFilterSortOptions.BY_LEVELS_ASC:
					if (a.level === b.level) {
						return a.id > b.id ? 1 : a.id < b.id ? -1 : 0;
					} else {
						return a.level > b.level ? 1 : -1;
					}
				case WcagFilterSortOptions.BY_LEVELS_DESC:
					if (a.level === b.level) {
						return b.id > a.id ? 1 : b.id < a.id ? -1 : 0;
					} else {
						return b.level > a.level ? 1 : -1;
					}
			}
		})
		return items;
	}
}
