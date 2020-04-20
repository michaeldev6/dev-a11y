import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: 'i'
})
export class AriaHideIconsDirective {

  @HostBinding('attr.aria-hidden') @Input('aria-hidden') ariaHidden = 'true';
}
