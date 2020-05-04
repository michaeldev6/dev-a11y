import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusableDirective } from './directives/focusable.directive';
import { NewWindowDirective } from './directives/new-window.directive';
import { AriaHideIconsDirective } from './directives/aria-hide-icons.directive';
import { PopOverComponent } from './components/pop-over/pop-over.component';
import { PageWrapperComponent } from './components/page-wrapper/page-wrapper.component';

const DIRECTIVES = [
	AriaHideIconsDirective,
	FocusableDirective,
	NewWindowDirective,
];

const COMPONENTS = [
	PopOverComponent,
	PageWrapperComponent
];

@NgModule({
	declarations: [
		...DIRECTIVES,
		...COMPONENTS,
	],
	imports: [
		CommonModule
	],
	exports: [
		...DIRECTIVES,
		...COMPONENTS,
	]
})
export class SharedModule { }
