import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcagComponent } from './wcag.component';

describe('WcagComponent', () => {
  let component: WcagComponent;
  let fixture: ComponentFixture<WcagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
