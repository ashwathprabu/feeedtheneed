import { TestBed } from '@angular/core/testing';

import { RegisterserviceService } from './registerservice.service';

describe('RegisterserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterserviceService = TestBed.get(RegisterserviceService);
    expect(service).toBeTruthy();
  });
});
