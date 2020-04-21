import {IWCAGItem} from '../../../interfaces/wcag-item';
import {WCAGLevel} from '../../../enums/wcag-levels';
import {WCAGItemTags} from '../../../enums/wcag-tags';
import {WCAGIds} from '../../../enums/wcag-ids';

const item: IWCAGItem = {
  id: WCAGIds.WCAG111,
  name: 'Non-text Content',
  description: 'Any non-text content should have a text alternative',
  purpose: 'Non-text content may not be able to be seen by everyone. Providing text alternatives helps give an another way for users to understand the non-text content',
  relatedItems: [WCAGIds.WCAG145, WCAGIds.WCAG149],
  level: WCAGLevel.A,
  tags: [WCAGItemTags.TEXT, WCAGItemTags.MEDIA, WCAGItemTags.IMAGES],
  ariaRoles: [],
  ariaAttributes: [],
  wcagLink: 'https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html'
};

export default item;
