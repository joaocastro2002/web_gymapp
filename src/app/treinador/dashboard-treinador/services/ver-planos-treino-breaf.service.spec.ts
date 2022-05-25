import { TestBed } from '@angular/core/testing';

import { VerPlanosTreinoBreafService } from './ver-planos-treino-breaf.service';

describe('VerPlanosTreinoBreafService', () => {
  let service: VerPlanosTreinoBreafService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerPlanosTreinoBreafService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
