import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksResourcesComponent } from './links-resources.component';

describe('LinksResourcesComponent', () => {
  let component: LinksResourcesComponent;
  let fixture: ComponentFixture<LinksResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
