import { TestBed } from '@angular/core/testing';

import { AgendarAvaliacaoService } from './agendar-avaliacao.service';

describe('AgendarAvaliacaoService', () => {
  let service: AgendarAvaliacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendarAvaliacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
