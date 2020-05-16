import { Injectable } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {AnnouncerService} from './announcer.service';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {
	private mainSiteTitle = `Dev-A11y: A Developer's Web Accessibility Resource`;

	constructor(
		private titleService: Title,
		private announcerService: AnnouncerService,
	) { }

	updatePageTitle(title: string, isSubPage = true): void {
		const updatedTitle = !isSubPage ? this.mainSiteTitle : `${title} | ${this.mainSiteTitle}`;
		this.titleService.setTitle(updatedTitle);
		this.announcerService.triggerAnnouncement(updatedTitle);
	}
}
