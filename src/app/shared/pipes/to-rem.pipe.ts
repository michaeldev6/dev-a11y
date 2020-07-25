import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toRem'
})
export class ToRemPipe implements PipeTransform {
	transform(value: number): string {
		return `${value / 16}rem`;
	}
}
