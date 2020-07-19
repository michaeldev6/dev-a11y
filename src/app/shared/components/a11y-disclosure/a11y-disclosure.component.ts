import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {BaseComponent} from '../../../core/components/base/base.component';

@Component({
  selector: 'app-a11y-disclosure',
  templateUrl: './a11y-disclosure.component.html',
  styleUrls: ['./a11y-disclosure.component.scss']
})
export class A11yDisclosureComponent extends BaseComponent {

	@Input() summary = 'Summary Text Here';
	@Input() expanded = false;

	@Output() onExpandToggle: EventEmitter<boolean>= new EventEmitter<boolean>();

	@ViewChild('details') detailElement: ElementRef;

	onSummaryClicked(): void {
		// event happens at moment when details is still open. Need timeout to wait for paint cycle
		setTimeout(() => {
			this.expanded = (this.detailElement.nativeElement as HTMLDetailsElement).open;
			this.onExpandToggle.emit(this.expanded);
		});
	}
}
