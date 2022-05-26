import { TestBed } from '@angular/core/testing';

import { CompararAvaliacaoService } from './comparar-avaliacao.service';

describe('CompararAvaliacaoService', () => {
  let service: CompararAvaliacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompararAvaliacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
