import {WcagFilterDisplayOptions} from '../enums/wcag-filter';
import {WCAGLevel} from '../enums/wcag-levels';
import {WCAGItemTag} from '../enums/wcag-tags';

export interface IWcagFilterOptions {
	search?: string;
	display?: WcagFilterDisplayOptions;
	levels?: Set<WCAGLevel>;
	tags?: Set<WCAGItemTag>;
}
