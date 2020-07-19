import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A11yDisclosureComponent } from './a11y-disclosure.component';

describe('A11yDisclosureComponent', () => {
  let component: A11yDisclosureComponent;
  let fixture: ComponentFixture<A11yDisclosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A11yDisclosureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A11yDisclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
