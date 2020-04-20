import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusableDirective } from './directives/focusable.directive';
import { NewWindowDirective } from './directives/new-window.directive';
import { AriaHideIconsDirective } from './directives/aria-hide-icons.directive';

const DIRECTIVES = [
  AriaHideIconsDirective,
  FocusableDirective,
  NewWindowDirective,
];

@NgModule({
  declarations: [
    ...DIRECTIVES,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...DIRECTIVES
  ]
})
export class SharedModule { }
