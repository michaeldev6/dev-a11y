import {IWCAGItem} from '../../../interfaces/wcag-item';
import {WCAGLevel} from '../../../enums/wcag-levels';
import {WCAGItemTags} from '../../../enums/wcag-tags';
import {WCAGIds} from '../../../enums/wcag-ids';

const item: IWCAGItem = {
  id: WCAGIds.WCAG143,
  name: 'Contrast (Minimum)',
  description: 'The contrast between text or images of text and the background must be 4.5:1',
  purpose: 'Some users may have visual issues where they may not be able to distinguish slight difference in the contrast of colours. Color blindness would be an example of such an impairment',
  relatedItems: [WCAGIds.WCAG146],
  level: WCAGLevel.AA,
  tags: [WCAGItemTags.TEXT, WCAGItemTags.STYLE, WCAGItemTags.LAYOUT],
  ariaRoles: [],
  ariaAttributes: [],
  wcagLink: 'https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html'
};

export default item;
