import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusableDirective } from './directives/focusable.directive';
import { NewWindowDirective } from './directives/new-window.directive';
import { AriaHideIconsDirective } from './directives/aria-hide-icons.directive';
import { PopOverComponent } from './components/pop-over/pop-over.component';
import { PageWrapperComponent } from './components/page-wrapper/page-wrapper.component';
import { A11yInputComponent } from './components/a11y-input/a11y-input.component';
import { A11ySelectComponent } from './components/a11y-select/a11y-select.component';
import { A11yDisclosureComponent } from './components/a11y-disclosure/a11y-disclosure.component';

const DIRECTIVES = [
	AriaHideIconsDirective,
	FocusableDirective,
	NewWindowDirective,
];

const COMPONENTS = [
	PopOverComponent,
	PageWrapperComponent,
	A11yInputComponent,
	A11ySelectComponent,
];

@NgModule({
	declarations: [
		...DIRECTIVES,
		...COMPONENTS,
		A11yDisclosureComponent,
	],
	imports: [
		CommonModule
	],
    exports: [
        ...DIRECTIVES,
        ...COMPONENTS,
        A11yDisclosureComponent,
    ]
})
export class SharedModule { }
