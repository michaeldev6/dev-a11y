import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A11ySelectComponent } from './a11y-select.component';

describe('A11ySelectComponent', () => {
  let component: A11ySelectComponent;
  let fixture: ComponentFixture<A11ySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A11ySelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A11ySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
