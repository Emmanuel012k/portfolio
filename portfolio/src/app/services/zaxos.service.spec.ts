import { TestBed } from '@angular/core/testing';

import { ZaxosService } from './zaxos.service';

describe('ZaxosService', () => {
  let service: ZaxosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZaxosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
