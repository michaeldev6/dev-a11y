import {Component, ElementRef, OnInit, Renderer2, ViewChild, ViewChildren} from '@angular/core';
import {BaseComponent} from '../base/base.component';
import {FontSizeService} from '../../services/font-size.service';
import {filter, takeWhile} from 'rxjs/operators';
import {WindowUtil} from '../../../shared/utils/window.util';
import {KeyboardService} from '../../services/keyboard.service';
import {IKeypressEvent} from '../../../shared/interfaces/keypress-event';
import {ESC_KEY, TAB_KEY} from '../../../shared/constants/keycodes';

@Component({
  selector: 'app-font-sizer',
  templateUrl: './font-sizer.component.html',
  styleUrls: ['./font-sizer.component.scss']
})
export class FontSizerComponent extends BaseComponent implements OnInit {

  isFontSizerShowing = true;
  fontSize = 16;
  private htmlTag: HTMLElement;

  @ViewChild('toggleSizer', {static: true}) toggleSizeButton: ElementRef;
  @ViewChild('decrease', {static: false}) decreaseButton: ElementRef;
  @ViewChild('increase', {static: false}) increaseButton: ElementRef;
  @ViewChild('resetSize', {static: false}) resetButton: ElementRef;

  constructor(
    private fontSizeService: FontSizeService,
    private renderer: Renderer2,
    private keyboadService: KeyboardService,
    private element: ElementRef
  ) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.getFontSize();
    this.getHTMLTag();
    this.listenToKeyboardEvents();
  }

  decreaseFontSize(): void {
    this.fontSizeService.updateSiteFontSize(this.fontSize-1);
  }

  private getFontSize(): void {
    this.fontSizeService.getSiteFontSize()
      .pipe(
        takeWhile(() => this.active),
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
    this.fontSizeService.updateSiteFontSize(this.fontSize+1);
  }

  private listenToKeyboardEvents(): void {
    this.keyboadService.getKeypressEvent()
      .pipe(takeWhile(() => this.active))
      .subscribe((event: IKeypressEvent) => {
        this.handleKeyPressEvent(event);
      });
  }

  private hideSizer(): void {
    this.isFontSizerShowing = false;
  }

  private handleKeyPressEvent(event: IKeypressEvent): void {
    if (this.isFontSizerShowing) {
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

  private handleEscPress(event): void {
    if (this.isFontSizerShowing && this.element.nativeElement.contains(event.target)) {
      this.hideSizer();
      this.toggleSizeButton.nativeElement.focus();
    }
  }

  private handleTabPress(event:IKeypressEvent):void {
    if (
      (event.target === this.resetButton.nativeElement && !event.isShiftPressed)
      || event.target === this.toggleSizeButton.nativeElement && event.isShiftPressed
    ) {
      console.log('Tabbing off: ');
      this.hideSizer();
    }
  }

  private updateBody(): void {
    this.renderer.setStyle(this.htmlTag, 'font-size', `${this.fontSize/16}rem`);
  }

  resetFontSize(): void {
    this.fontSizeService.resetFontSize();
  }

  toggleShowingFontSizer(): void {
    this.isFontSizerShowing = !this.isFontSizerShowing;
    if (this.isFontSizerShowing) {
      this.decreaseButton.nativeElement.focus();
    }
  }

}
