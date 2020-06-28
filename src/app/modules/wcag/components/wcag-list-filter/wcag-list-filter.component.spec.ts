import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcagListFilterComponent } from './wcag-list-filter.component';

describe('WcagListFilterComponent', () => {
  let component: WcagListFilterComponent;
  let fixture: ComponentFixture<WcagListFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcagListFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcagListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
