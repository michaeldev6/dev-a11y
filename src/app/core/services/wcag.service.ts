import {Injectable} from '@angular/core';
import {WCAGGuidelines} from '../../shared/constants/wcag/guidelines/wcag-guidelines';
import {IWCAGItem} from '../../shared/interfaces/wcag-item';
import {WCAGLevel} from '../../shared/enums/wcag-levels';

@Injectable({
  providedIn: 'root'
})
export class WcagService {

  private wcagIds: string[] = Object.keys(WCAGGuidelines);

  constructor() { }

  getWCAGIds(): string[] {
    return this.wcagIds;
  }

  getAllWCAGItems(): IWCAGItem[] {
    return this.wcagIds.map((id: string) => WCAGGuidelines[id]);
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
}
