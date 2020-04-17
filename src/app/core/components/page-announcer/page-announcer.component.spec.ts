import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAnnouncerComponent } from './page-announcer.component';

describe('PageAnnouncerComponent', () => {
  let component: PageAnnouncerComponent;
  let fixture: ComponentFixture<PageAnnouncerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAnnouncerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAnnouncerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
