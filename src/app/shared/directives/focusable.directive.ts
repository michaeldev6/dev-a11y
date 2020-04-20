import {AfterViewInit, Directive, ElementRef, Input, OnDestroy, Renderer2} from '@angular/core';
import {FocusableIds} from '../enums/focusable-ids';
import {FocusService} from '../../core/services/focus.service';

@Directive({
  selector: '[appFocusable]'
})
export class FocusableDirective implements AfterViewInit, OnDestroy {

  private alreadyTabbableElements: string[] = [
    'button',
    'a'
  ];

  @Input() appFocusable: FocusableIds; //
  @Input() isTabbable = false;

  constructor(
    private element: ElementRef,
    private focusService: FocusService,
    private renderer: Renderer2
  ) {
  }

  ngAfterViewInit(): void {
    if (!!this.focusService.getFocusableElement(this.appFocusable)) {
      console.warn(`Element with focus id ${this.appFocusable} already exists. Cannot have multiple focusable elements with the same id`);
      return;
    }

    if (!!this.element && !!this.appFocusable) {
      if (this.alreadyTabbableElements.indexOf(this.element.nativeElement.localName) === -1) {
        this.renderer.setAttribute(this.element.nativeElement, 'tabindex', this.isTabbable ? '0' : '-1');
      }
      this.focusService.registerFocusableElement(this.appFocusable, this.element);
    }
  }

  ngOnDestroy(): void {
    this.focusService.unregisterFocusableElement(this.appFocusable);
  }
}
