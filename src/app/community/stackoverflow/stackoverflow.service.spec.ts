import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { StackoverflowService } from './stackoverflow.service';

describe('StackoverflowService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: StackoverflowService = TestBed.get(StackoverflowService);
    expect(service).toBeTruthy();
  });
});
