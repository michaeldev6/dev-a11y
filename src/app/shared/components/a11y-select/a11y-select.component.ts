import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BaseComponent} from '../../../core/components/base/base.component';
import {ISelectOption, ISelectOptionGroup, ISelectOptions} from '../../interfaces/a11y-select';

@Component({
  selector: 'app-a11y-select',
  templateUrl: './a11y-select.component.html',
  styleUrls: ['./a11y-select.component.scss']
})
export class A11ySelectComponent extends BaseComponent {

	private _selectedOption: ISelectOption;
	private _options: ISelectOptions = [];
	private _mappedOptions: { [value: string]: ISelectOption } = {};

	@Input() describedByText: string;
	@Input() describedByIds: string;
	@Input() label = 'A11y Select';
	@Input() showDescribedByText = true;

	@Input() set options(value: ISelectOptions) {
		if (!!value && value.length > 0) {
			this._options = value;
			this.generateMappedOptions();
			this.setDefaultSelected();
		}
	}
	get options(): ISelectOptions {
		return this._options;
	}

	@Input() set selectedOption(value: ISelectOption | undefined) {
		this._selectedOption = value;
	}
	get selectedOption(): ISelectOption {
		return this._selectedOption;
	}

	@Output() onOptionSelected: EventEmitter<ISelectOption> = new EventEmitter<ISelectOption>();

	private generateMappedOptions(): void {
		if (this._options && this._options.length > 0) {
			this._options.forEach((option: ISelectOption | ISelectOptionGroup) => {
				if (!this.isOptionGroup(option)) {
					const simpleOption: ISelectOption = option as ISelectOption;
					this._mappedOptions[simpleOption.value] = simpleOption;
				} else {
					const optionGroup: ISelectOptionGroup = option as ISelectOptionGroup;
					if (!!optionGroup.options && optionGroup.options.length > 0) {
						optionGroup.options.forEach((groupOption: ISelectOption) => {
							this._mappedOptions[groupOption.value] = groupOption;
						});
					}
				}
			});
		} else {
			this._mappedOptions = {};
		}
	}

	isOptionGroup(option: ISelectOption | ISelectOptionGroup): boolean {
		return 'options' in option && 'label' in option;
	}

	onSelectChanged(element: EventTarget): void {
		const value: string = (element as HTMLSelectElement).value;
		this.selectedOption = this._mappedOptions[value];
		this.onOptionSelected.emit(this.selectedOption);
	}

	setDefaultSelected(): void {
		if (!this.selectedOption) {
			const firstOption: ISelectOption | ISelectOptionGroup = this._options[0];
			if (this.isOptionGroup(firstOption)) {
				this.selectedOption = (firstOption as ISelectOptionGroup).options[0];
			} else {
				this.selectedOption = firstOption as ISelectOption;
			}
		}
	}
}
