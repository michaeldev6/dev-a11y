import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A11yCheckboxComponent } from './a11y-checkbox.component';

describe('A11yCheckboxComponent', () => {
  let component: A11yCheckboxComponent;
  let fixture: ComponentFixture<A11yCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A11yCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A11yCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
