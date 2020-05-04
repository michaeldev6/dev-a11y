import { Component, OnInit } from '@angular/core';
import {BasePageComponent} from '../../../../core/components/base-page/base-page.component';
import {IHomeLink} from '../../../../shared/interfaces/home-link';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BasePageComponent implements OnInit {

	readonly homeLinks: IHomeLink[] = [
		{
			route: '/wcag',
			heading: 'WCAG Checklist',
			subHeading: 'Look through the guidelines and get a quick understanding of what each one means. A filter is available to help you out.'
		},
		{
			route: '/aria',
			heading: 'ARIA Roles and Attributes',
			subHeading: 'Read about all the various aria roles and attributes, what they are used for and how to use them in your website'
		},
		{
			route: '/code-samples',
			heading: 'Code Samples for Common Website Components',
			subHeading: 'Have a look at common feature and components on website and one way to impleete'
		},
		{
			route: '/aria',
			heading: 'ARIA Roles and Attributes',
			subHeading: 'Read about all the various aria roles and attributes, what they are used for and how to use them in your website'
		},
		{
			route: '/aria',
			heading: 'ARIA Roles and Attributes',
			subHeading: 'Read about all the various aria roles and attributes, what they are used for and how to use them in your website'
		},
	];

	ngOnInit(): void {
		super.ngOnInit();
	}

}
