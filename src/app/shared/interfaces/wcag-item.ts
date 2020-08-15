import {WCAGLevel} from '../enums/wcag-levels';
import {WCAGItemTag} from '../enums/wcag-tags';
import {AriaRoles} from '../enums/aria-roles';
import {AriaAttributes} from '../enums/aria-attributes';
import {WCAGIds} from '../enums/wcag-ids';

export interface IWCAGItem {
  id: WCAGIds;
  name: string;
  description: string;
  purpose: string;
  relatedItems?: WCAGIds[];
  level: WCAGLevel;
  tags: WCAGItemTag[];
  ariaRoles?: AriaRoles[];
  ariaAttributes?: AriaAttributes[];
  wcagLink: string;
}
