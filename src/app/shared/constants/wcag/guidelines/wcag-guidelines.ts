import WCAG111 from './wcag-1.1.1';
import WCAG143 from './wcag-1.4.3';
import WCAG149 from './wcag-1.4.9';
import WCAG321 from './wcag-3.2.1';
import {IWCAGItem} from '../../../interfaces/wcag-item';

export const WCAGGuidelines:{[key: string]: IWCAGItem} = {
	[WCAG111.id]: WCAG111,
	[WCAG149.id]: WCAG149,
	[WCAG143.id]: WCAG143,
	[WCAG321.id]: WCAG321,
};
