import {IWCAGItem} from '../../../interfaces/wcag-item';
import {WCAGLevel} from '../../../enums/wcag-levels';
import {WCAGItemTag} from '../../../enums/wcag-tags';
import {WCAGIds} from '../../../enums/wcag-ids';

const item: IWCAGItem = {
  id: WCAGIds.WCAG149,
  name: 'Images of Text (No Exception)',
  description: 'Do not use images text at all',
  purpose: 'Easier to just use regular text',
  relatedItems: [WCAGIds.WCAG111, WCAGIds.WCAG145],
  level: WCAGLevel.AAA,
  tags: [WCAGItemTag.TEXT, WCAGItemTag.MEDIA, WCAGItemTag.IMAGES],
  ariaRoles: [],
  ariaAttributes: [],
  wcagLink: 'https://www.w3.org/WAI/WCAG21/Understanding/images-of-text-no-exception.html'
};

export default item;
