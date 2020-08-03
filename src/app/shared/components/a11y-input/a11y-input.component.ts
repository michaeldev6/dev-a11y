import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {BaseComponent} from '../../../core/components/base/base.component';
import {AnnouncerService} from '../../../core/services/announcer.service';

@Component({
  selector: 'app-a11y-input',
  templateUrl: './a11y-input.component.html',
  styleUrls: ['./a11y-input.component.scss']
})
export class A11yInputComponent extends BaseComponent implements OnInit {

	private inputValue = '';

	@Input() describedByText: string;
	@Input() describedByIds: string;
	@Input() filterLabel = 'Placeholder';
	@Input() showDescribedByText = true;
	@Input() useCloseButton = false;

	@Output() onValueChanged: EventEmitter<string> = new EventEmitter();

	@ViewChild('input') inputFilter: ElementRef;

	constructor(private announcer: AnnouncerService) {
		super();
	}

	ngOnInit(): void {
		super.ngOnInit();
	}

	clearFilter(): void {
		this.inputValue = '';
		if (!!this.inputFilter) {
			this.inputFilter.nativeElement.value = '';
			this.inputFilter.nativeElement.focus();
			this.announcer.triggerAnnouncement(`${this.filterLabel} input cleared.`);
			this.triggerEvent();
		}
	}

	generateDescribedByIds(): string | null {
		let describedByIds: string | null = null;
		if (!!this.describedByText) {
			describedByIds = `a11y-input_describedby_${this.cid} `;
		}
		if (!!this.describedByIds) {
			describedByIds += this.describedByIds;
		}
		return describedByIds;
	}

	hasContent(): boolean {
		return !!this.inputValue && this.inputValue.length > 0;
	}

	onInputChanged(event: Event): void {
		const input: HTMLInputElement = event.target as HTMLInputElement;
		this.inputValue = input.value;
		this.triggerEvent();
	}

	private triggerEvent(): void {
		this.onValueChanged.emit(this.inputValue);
	}

}
