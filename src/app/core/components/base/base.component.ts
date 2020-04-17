import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  template: '',
  styleUrls: []
})
export class BaseComponent implements OnInit, OnDestroy {
  active = false;

  constructor() {}

  ngOnInit() {
    this.active = true;
  }

  ngOnDestroy(): void {
    this.active = false;
  }

  trackByFn(index, item) {
    return index;
  }
}
