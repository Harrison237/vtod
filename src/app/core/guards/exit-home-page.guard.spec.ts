import { TestBed } from '@angular/core/testing';

import { ExitHomePageGuard } from './exit-home-page.guard';

describe('ExitHomePageGuard', () => {
  let guard: ExitHomePageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExitHomePageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
