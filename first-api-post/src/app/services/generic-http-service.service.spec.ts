import { TestBed } from '@angular/core/testing';

import { GenericHttpServiceService } from './generic-http-service.service';

describe('GenericHttpServiceService', () => {
  let service: GenericHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
