import { TestBed } from '@angular/core/testing';

import { WcagService } from './wcag.service';

describe('WcagService', () => {
  let service: WcagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WcagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
