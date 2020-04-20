import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Title} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {

  private mainSiteTitle = `Dev-A11y: A Developer's Web Accessibility Resource`;

  private _pageTitle$: BehaviorSubject<string> = new BehaviorSubject(this.mainSiteTitle);

  constructor(private titleService: Title) { }

  getPageTitle(): Observable<string> {
    return this._pageTitle$;
  }

  updatePageTitle(title: string, isSubPage = true): void {
    const updatedTitle = !isSubPage ? this.mainSiteTitle : `${title} | ${this.mainSiteTitle}`;
    this.titleService.setTitle(updatedTitle);
    this._pageTitle$.next(updatedTitle);
  }
}
