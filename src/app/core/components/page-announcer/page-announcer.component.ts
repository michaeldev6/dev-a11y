import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../base/base.component';
import {AssertiveStates} from '../../../shared/enums/assertive-states';
import {AnnouncerService} from '../../services/announcer.service';
import {takeWhile} from 'rxjs/operators';
import {IAnnouncementEvent} from '../../../shared/interfaces/announcement-event';

@Component({
	selector: 'app-page-announcer',
	templateUrl: './page-announcer.component.html',
	styleUrls: ['./page-announcer.component.scss']
})
export class PageAnnouncerComponent extends BaseComponent implements OnInit{

	announcement: string = '';
	originalAnnouncement: string = '';
	assertiveState: AssertiveStates = AssertiveStates.ASSERTIVE;
	numberOfRepeats = 1;

	constructor(private announcerService: AnnouncerService) {
		super();
	}

	ngOnInit() {
		super.ngOnInit();
		this.getAnnouncement();
	}

	getAnnouncement(): void {
		this.announcerService.getAnnouncement()
			.pipe(takeWhile(() => this.active))
			.subscribe((event: IAnnouncementEvent) => {
				this.handleAnnouncementEvent(event);
			});
	}

	private handleAnnouncementEvent(event: IAnnouncementEvent): void {
		setTimeout(() => {
			if (event.assertiveState !== this.assertiveState) {
				this.assertiveState = event.assertiveState;
				setTimeout(() => {
					this.updateAnnouncementText(event.text);
				});
			} else {
				this.updateAnnouncementText(event.text);
			}
		});
	}

	private updateAnnouncementText(text: string): void {
		text = text.trim();
		if (text === this.originalAnnouncement) {
			this.numberOfRepeats++;
			const periods = '.' + Array(this.numberOfRepeats).join('.');
			// adding more periods at the end of the text will cause the screen reader to read out the text again,
			// without reading the periods out (Voice Over/Chrome at least)
			this.announcement = `${text}${periods}`;
		} else {
			this.announcement = this.originalAnnouncement = text;
			this.numberOfRepeats = 0;
		}
		// clear out announcer so SR do not find it
		setTimeout(() => {
			this.announcement = '';
		}, 250);
	}
}
