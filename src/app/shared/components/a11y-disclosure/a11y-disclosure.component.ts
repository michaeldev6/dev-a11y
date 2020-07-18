import {Component, Input, OnInit} from '@angular/core';
import {BaseComponent} from '../../../core/components/base/base.component';

@Component({
  selector: 'app-a11y-disclosure',
  templateUrl: './a11y-disclosure.component.html',
  styleUrls: ['./a11y-disclosure.component.scss']
})
export class A11yDisclosureComponent extends BaseComponent {

	private _expanded: boolean;

	@Input() summary = 'Summary Text Here';
	@Input() set expanded(value: boolean) {
		this._expanded = !!value ? value : undefined;
	}
	get expanded(): boolean | undefined {
		return this._expanded !== undefined ? this._expanded : undefined;
	}
}
