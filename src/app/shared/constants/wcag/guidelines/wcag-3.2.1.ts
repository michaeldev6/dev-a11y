import {IWCAGItem} from '../../../interfaces/wcag-item';
import {WCAGLevel} from '../../../enums/wcag-levels';
import {WCAGItemTag} from '../../../enums/wcag-tags';
import {WCAGIds} from '../../../enums/wcag-ids';

const item: IWCAGItem = {
	id: WCAGIds.WCAG321,
	name: 'On Focus',
	description: 'When any element is focused on, there should be no change of context',
	purpose: 'Context being text',
	relatedItems: [],
	level: WCAGLevel.A,
	tags: [WCAGItemTag.INTERACTIONS, WCAGItemTag.FOCUS],
	ariaRoles: [],
	ariaAttributes: [],
	wcagLink: 'https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html'
};

export default item;
