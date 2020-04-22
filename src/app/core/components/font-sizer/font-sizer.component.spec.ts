import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSizerComponent } from './font-sizer.component';

describe('FontSizerComponent', () => {
  let component: FontSizerComponent;
  let fixture: ComponentFixture<FontSizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontSizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontSizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
