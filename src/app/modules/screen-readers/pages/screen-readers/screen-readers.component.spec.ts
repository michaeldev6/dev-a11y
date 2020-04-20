import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenReadersComponent } from './screen-readers.component';

describe('ScreenReadersComponent', () => {
  let component: ScreenReadersComponent;
  let fixture: ComponentFixture<ScreenReadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenReadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenReadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
