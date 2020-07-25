import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BaseComponent} from '../../../core/components/base/base.component';
import {CheckboxPosition, CheckboxState} from '../../enums/a11y-checkbox';

@Component({
  selector: 'app-a11y-checkbox',
  templateUrl: './a11y-checkbox.component.html',
  styleUrls: ['./a11y-checkbox.component.scss']
})
export class A11yCheckboxComponent extends BaseComponent {

	private _checkboxState: CheckboxState = CheckboxState.Unchecked;
	private _checked = false;
	private _indeterminate = false;

	get checked(): boolean { return this._checked; }
	get indeterminate(): boolean { return this._indeterminate; }

	checkboxPositionEnum: typeof CheckboxPosition = CheckboxPosition;

	@Input() checkboxSize = 18;
	@Input() checkboxPosition: CheckboxPosition = CheckboxPosition.Left;
	@Input() label = 'Checkbox label';

	@Input() set checkboxState(state: CheckboxState) {
		if (!!state) {
			this._checkboxState = state;
			this.updateCheckboxState();
		}
	}
	get checkboxState(): CheckboxState { return this._checkboxState; }

	@Output() onStateChanged: EventEmitter<CheckboxState> = new EventEmitter();

	private updateCheckboxState(): void {
		switch (this._checkboxState) {
			case CheckboxState.Checked:
				this._checked = true;
				this._indeterminate = false;
				break;
			case CheckboxState.Unchecked:
				this._checked = false;
				this._indeterminate = false;
				break;
			case CheckboxState.Indeterminate:
				this._checked = false;
				this._indeterminate = true;
				break;
		}
	}

	whenInputChanged(event: Event): void {
		const checkbox: HTMLInputElement = event.target as HTMLInputElement;
		this._checkboxState = checkbox.checked ? CheckboxState.Checked : CheckboxState.Unchecked;
		this.updateCheckboxState();
	}
}
