import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcagListComponent } from './wcag-list.component';

describe('WcagListComponent', () => {
  let component: WcagListComponent;
  let fixture: ComponentFixture<WcagListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcagListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
