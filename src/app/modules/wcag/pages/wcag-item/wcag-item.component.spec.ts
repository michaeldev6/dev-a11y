import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcagItemComponent } from './wcag-item.component';

describe('WcagItemComponent', () => {
  let component: WcagItemComponent;
  let fixture: ComponentFixture<WcagItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcagItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcagItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
