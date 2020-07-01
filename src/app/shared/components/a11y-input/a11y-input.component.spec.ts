import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A11yInputComponent } from './a11y-input.component';

describe('InputFilterComponent', () => {
  let component: A11yInputComponent;
  let fixture: ComponentFixture<A11yInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A11yInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A11yInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
