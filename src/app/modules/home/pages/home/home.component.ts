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
			description: 'Look through the guidelines and get a quick understanding of what each one means. A filter is available to help you out.'
		},
		{
			route: '/aria',
			heading: 'ARIA',
			description: 'Accessible Rich Internet Applications. Read about all the various aria roles and attributes, what they are used for and how to use them in your website.'
		},
		{
			route: '/code-samples',
			heading: 'Code Samples',
			description: 'Have a look at common feature and components web applications utilize and how to make them accessible.'
		},
		{
			route: '/screen-readers',
			heading: 'Screen Readers',
			description: 'Learn about the more popular screen readers and get an understanding of how they work.'
		},
		{
			route: '/links-resources',
			heading: 'Links and Resources',
			description: 'Here are links to other resources to help in your understanding of web accessibility. Many were utilized in helping to build this website and make it as accessible as possible.'
		},
	];
}
