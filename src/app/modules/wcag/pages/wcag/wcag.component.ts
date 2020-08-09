import {Component, OnInit} from '@angular/core';
import {BasePageComponent} from '../../../../core/components/base-page/base-page.component';
import {FocusableIds} from '../../../../shared/enums/focusable-ids';
import {ISkipLink} from '../../../../shared/interfaces/skip-link';

@Component({
	selector: 'app-wcag',
	templateUrl: './wcag.component.html',
	styleUrls: ['./wcag.component.scss']
})
export class WcagComponent extends BasePageComponent {

	readonly focusableIds: typeof FocusableIds = FocusableIds;
	readonly wcagSkipLinks: ISkipLink[] = [
		{
			text: 'Skip to main navigation',
			id: FocusableIds.MAIN_NAVIGATION
		},
		{
			text: 'Skip to main content',
			id: FocusableIds.MAIN_CONTENT_HEADING
		},
		{
			text: 'Skip to WCAG Filters',
			id: this.focusableIds.WCAG_FILTERS
		},
		{
			text: 'Skip to WCAG Items',
			id: this.focusableIds.WCAG_LIST
		},
		{
			text: 'Skip to footer',
			id: FocusableIds.FOOTER
		}
	];

	pageTitle = 'WCAG Checklist';

	updateSkipLinks() {
		this.skipLinksService.updateSkipLinks(this.wcagSkipLinks);
	}
}
