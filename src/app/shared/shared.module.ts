import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusableDirective } from './directives/focusable.directive';
import { NewWindowDirective } from './directives/new-window.directive';
import { AutoAriaHideDirective } from './directives/auto-aria-hide.directive';
import { PopOverComponent } from './components/pop-over/pop-over.component';
import { PageWrapperComponent } from './components/page-wrapper/page-wrapper.component';
import { A11yInputComponent } from './components/a11y-input/a11y-input.component';
import { A11ySelectComponent } from './components/a11y-select/a11y-select.component';
import { A11yDisclosureComponent } from './components/a11y-disclosure/a11y-disclosure.component';
import { A11yCheckboxComponent } from './components/a11y-checkbox/a11y-checkbox.component';
import { ToRemPipe } from './pipes/to-rem.pipe';

const PIPES = [
	ToRemPipe,
];

const DIRECTIVES = [
	AutoAriaHideDirective,
	FocusableDirective,
	NewWindowDirective,
];

const COMPONENTS = [
	PopOverComponent,
	PageWrapperComponent,
	A11yInputComponent,
	A11ySelectComponent,
	A11yDisclosureComponent,
	A11yCheckboxComponent,
];

@NgModule({
	declarations: [
		...PIPES,
		...DIRECTIVES,
		...COMPONENTS,
	],
	imports: [
		CommonModule
	],
	exports: [
		...PIPES,
		...DIRECTIVES,
		...COMPONENTS,
	]
})
export class SharedModule { }
