import {
	Component,
	OnInit,
	Renderer2,
} from '@angular/core';
import { filter, takeUntil,} from 'rxjs/operators';
import {BaseComponent} from '../base/base.component';
import {FontSizeService} from '../../services/font-size.service';
import {WindowUtil} from '../../../shared/utils/window.util';
import {PopOverPositions} from '../../../shared/enums/pop-over-positions';

@Component({
	selector: 'app-font-sizer',
	templateUrl: './font-sizer.component.html',
	styleUrls: ['./font-sizer.component.scss']
})
export class FontSizerComponent extends BaseComponent implements OnInit {

	popoverPosition: typeof PopOverPositions = PopOverPositions;
	fontSize = 16;
	private htmlTag: HTMLElement;

	constructor(
		private fontSizeService: FontSizeService,
		private renderer: Renderer2,
	) {
		super();
	}

	ngOnInit(): void {
		super.ngOnInit();
		this.getFontSize();
		this.getHTMLTag();
	}

	decreaseFontSize(): void {
		this.fontSizeService.updateSiteFontSize(this.fontSize - 1);
	}

	private getFontSize(): void {
		this.fontSizeService.getSiteFontSize()
			.pipe(
				takeUntil(this._unsubscribe$),
				filter(size => this.fontSize !== size)
			)
			.subscribe((size: number) => {
				this.fontSize = size;
				this.updateBody();
			});
	}

	private getHTMLTag(): void {
		this.htmlTag = WindowUtil.nativeDocument.getElementsByTagName('html')[0];
	}

	increaseFontSize(): void {
		this.fontSizeService.updateSiteFontSize(this.fontSize + 1);
	}

	private updateBody(): void {
		this.renderer.setStyle(this.htmlTag, 'font-size', `${this.fontSize/16}rem`);
	}

	resetFontSize(): void {
		this.fontSizeService.resetFontSize();
	}
}
