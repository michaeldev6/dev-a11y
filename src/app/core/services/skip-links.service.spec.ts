import { TestBed } from '@angular/core/testing';

import { SkipLinksService } from './skip-links.service';

describe('SkipLinksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkipLinksService = TestBed.get(SkipLinksService);
    expect(service).toBeTruthy();
  });
});
