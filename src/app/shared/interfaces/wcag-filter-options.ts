import {WcagFilterSortOptions} from '../enums/wcag-filter';
import {WCAGLevel} from '../enums/wcag-levels';
import {WCAGItemTag} from '../enums/wcag-tags';

export interface IWcagFilterOptions {
	search?: string;
	sort?: WcagFilterSortOptions;
	levels?: Set<WCAGLevel>;
	tags?: Set<WCAGItemTag>;
}
