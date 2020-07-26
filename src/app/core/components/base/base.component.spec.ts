import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseComponent } from './base.component';

class BaseComponentTest extends BaseComponent {}

describe('BaseComponent', () => {
  let component: BaseComponentTest;
  let fixture: ComponentFixture<BaseComponentTest>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseComponentTest ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseComponentTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
