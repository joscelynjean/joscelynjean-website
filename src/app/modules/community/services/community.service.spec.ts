import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CommunityService } from './community.service';

describe('CommunityService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: CommunityService = TestBed.get(CommunityService);
    expect(service).toBeTruthy();
  });
});
