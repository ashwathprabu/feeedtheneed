import { TestBed } from '@angular/core/testing';

import { SendReqService } from './send-req.service';

describe('SendReqService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendReqService = TestBed.get(SendReqService);
    expect(service).toBeTruthy();
  });
});
