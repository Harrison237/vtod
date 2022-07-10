import { TestBed } from '@angular/core/testing';

import { SideBarHomePageService } from './side-bar-home-page.service';

describe('SideBarHomePageService', () => {
  let service: SideBarHomePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideBarHomePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
