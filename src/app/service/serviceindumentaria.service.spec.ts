import { TestBed } from '@angular/core/testing';

import { ServiceindumentariaService } from './serviceindumentaria.service';

describe('ServiceindumentariaService', () => {
  let service: ServiceindumentariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceindumentariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
