import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  template: '',
  styleUrls: []
})
export class BaseComponent implements OnInit, OnDestroy {

	private static id = 0;
	cid = 0;
	active = false;

	ngOnInit() {
		BaseComponent.id++;
		this.cid = BaseComponent.id;
		this.active = true;
	}

	ngOnDestroy(): void {
		this.active = false;
	}

	trackByFn(index, item) {
		return index;
	}
}
