import { TestBed } from '@angular/core/testing';

import { EcraAlunosService } from './ecra-alunos.service';

describe('EcraAlunosService', () => {
  let service: EcraAlunosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcraAlunosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
