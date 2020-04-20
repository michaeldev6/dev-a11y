import {AfterViewInit, Directive, ElementRef, HostBinding, Input} from '@angular/core';

@Directive({
  selector: 'a[target="_blank"]'
})
export class NewWindowDirective implements AfterViewInit {

  @HostBinding('rel') @Input() rel = 'noopener noreferrer';

  constructor(
    private element: ElementRef
  ) { }

  ngAfterViewInit(): void {
    this.appendAccessibleContent();
  }

  private appendAccessibleContent(): void {
    const existingHtml = `${this.element.nativeElement.innerHTML.trim()}. `;
    const icon = `<i class="fa fa-external-link" aria-hidden="true"></i>`;
    const srOnlyText = `<span class="sr-only">Link opens in a new window</span>`;
    this.element.nativeElement.innerHTML = `${existingHtml}${icon}${srOnlyText}`;
  }
}
