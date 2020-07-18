import {Component, Input, OnInit} from '@angular/core';
import {BaseComponent} from '../../../core/components/base/base.component';

@Component({
  selector: 'app-a11y-disclosure',
  templateUrl: './a11y-disclosure.component.html',
  styleUrls: ['./a11y-disclosure.component.scss']
})
export class A11yDisclosureComponent extends BaseComponent implements OnInit {

	@Input() summary: string = 'Summary Text Here';

	ngOnInit(): void {
	}

}
