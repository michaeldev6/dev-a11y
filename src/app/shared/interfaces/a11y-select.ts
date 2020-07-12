export interface ISelectOption {
	label: string;
	value: string;
}

export interface ISelectOptionGroup {
	label: string;
	options: ISelectOption[];
}

export type ISelectOptions = (ISelectOption | ISelectOptionGroup)[];
