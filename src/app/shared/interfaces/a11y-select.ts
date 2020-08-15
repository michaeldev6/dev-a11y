export interface ISelectOption {
	label: string;
	ariaLabel?: string;
	value: string;
}

export interface ISelectOptionGroup {
	label: string;
	ariaLabel?: string;
	options: ISelectOption[];
}

export type ISelectOptions = (ISelectOption | ISelectOptionGroup)[];
