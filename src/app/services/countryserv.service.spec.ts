import { TestBed } from '@angular/core/testing';

import { CountryservService } from './countryserv.service';

describe('CountryservService', () => {
  let service: CountryservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
