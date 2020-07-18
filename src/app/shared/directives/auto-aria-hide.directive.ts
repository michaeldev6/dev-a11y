import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: 'i, hr'
})
export class AutoAriaHideDirective {

  @HostBinding('attr.aria-hidden') @Input('aria-hidden') ariaHidden = 'true';
}
