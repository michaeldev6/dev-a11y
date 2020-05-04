import {Component, Input} from '@angular/core';
import {BaseComponent} from '../../../core/components/base/base.component';
import {FocusableIds} from '../../enums/focusable-ids';

@Component({
	selector: 'app-page-wrapper',
	templateUrl: './page-wrapper.component.html',
	styleUrls: ['./page-wrapper.component.scss']
})
export class PageWrapperComponent extends BaseComponent {

	headingId: FocusableIds = FocusableIds.MAIN_CONTENT_HEADING;

	@Input() heading = '';
	@Input() screenReaderHeading: string;

	constructor() {
		super();
	}
}
