import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FontSizeService {

  private _minFontSize = 10;
  private _maxFontSize = 32;
  private _siteBaseFontSize = 16;
  private _fontSize$: BehaviorSubject<number> = new BehaviorSubject(this._siteBaseFontSize);

  constructor() { }

  getSiteFontSize(): Observable<number> {
    return this._fontSize$;
  }

  updateSiteFontSize(size: number): void {
    size = Math.max(this._minFontSize, Math.min(this._maxFontSize, size));
    this._siteBaseFontSize = size;
    this._fontSize$.next(this._siteBaseFontSize);
  }
}
