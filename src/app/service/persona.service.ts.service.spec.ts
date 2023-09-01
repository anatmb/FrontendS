import { TestBed } from '@angular/core/testing';

import { PersonaServiceTsService } from './persona.service.ts.service';

describe('PersonaServiceTsService', () => {
  let service: PersonaServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
