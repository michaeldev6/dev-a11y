import {Component, ContentChild, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {BaseComponent} from '../../../core/components/base/base.component';
import {v4 as uuidv4} from 'uuid';
import {KeyboardService} from '../../../core/services/keyboard.service';
import {takeUntil} from 'rxjs/operators';
import {IKeypressEvent} from '../../interfaces/keypress-event';
import {PopOverPositions} from '../../enums/pop-over-positions';
import {OutlineStyle} from '../../enums/outline-style';
import {ESC_KEY, TAB_KEY} from '../../constants/keycodes';
import {FocusableIds} from '../../enums/focusable-ids';

@Component({
	selector: 'app-pop-over',
	templateUrl: './pop-over.component.html',
	styleUrls: ['./pop-over.component.scss']
})
export class PopOverComponent extends BaseComponent implements OnInit {

	private _id: string;
	get id(): string { return this._id; }

	@Input() buttonOutlineStyle: OutlineStyle = OutlineStyle.White;
	@Input() buttonAriaLabel: string;
	@Input() focusableId: FocusableIds;
	@Input() isExpanded = false;
	@Input() showCloseButton = true;
	@Input() popoverPosition: PopOverPositions = PopOverPositions.RightTop;

	@ViewChild('popOverButton', {static: true}) popoverButton: ElementRef;
	@ViewChild('popOverContent') popoverContent: ElementRef;
	@ContentChild('focusFirst') focusFirstElement: ElementRef;
	@ContentChild('lastElement') lastElement: ElementRef;

	@HostListener('document:click', ['$event']) onDocumentClick(event) {
		if (this.active && this.isExpanded && !this.element.nativeElement.contains(event.target)) {
			this.isExpanded = false;
		}
	}

	constructor(
		private keyboardService: KeyboardService,
		private renderer: Renderer2,
		private element: ElementRef,
	) {
		super();
		this._id = 'popover-id:' + uuidv4();
	}

	ngOnInit(): void {
		super.ngOnInit();
		this.setupAria();
		this.listenToKeyboardEvents();
	}

	private setupAria(): void {
		if (!!this.buttonAriaLabel) {
			this.renderer.setAttribute(this.popoverButton.nativeElement, 'aria-label', this.buttonAriaLabel);
		}
	}

	private listenToKeyboardEvents(): void {
		this.keyboardService.getKeypressEvent()
			.pipe(takeUntil(this._unsubscribe$))
			.subscribe((event: IKeypressEvent) => {
				this.handleKeyPressEvent(event);
			});
	}

	private handleKeyPressEvent(event: IKeypressEvent): void {
		if (this.isExpanded) {
			switch(event.keycode) {
				case TAB_KEY:
					this.handleTabPress(event);
					break;
				case ESC_KEY:
					this.handleEscPress(event);
					break;
			}
		}
	}

	private handleTabPress(event:IKeypressEvent):void {
		if (
			(event.target === this.lastElement.nativeElement && !event.isShiftPressed)
			|| event.target === this.popoverButton.nativeElement && event.isShiftPressed
		) {
			this.close();
		}
	}

	private handleEscPress(event): void {
		if (this.isExpanded && this.popoverContent.nativeElement.contains(event.target)) {
			this.close();
			this.focusOnButton();
		}
	}

	private focusOnContent(): void {
		setTimeout(() => {
			if (!!this.focusFirstElement) {
				this.focusFirstElement.nativeElement.focus();
			} else {
				this.popoverContent.nativeElement.focus();
			}
		});
	}

	private focusOnButton(): void {
		this.popoverButton.nativeElement.focus();
	}

	togglePopover(): void {
		this.isExpanded = !this.isExpanded;
		if (this.isExpanded) {
			this.focusOnContent();
		}
	}

	close(): void {
		this.isExpanded = false;
		this.focusOnButton();
	}
}
