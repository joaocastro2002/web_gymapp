import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificacaoAlunoAvaliacaoComponent } from './identificacao-aluno-avaliacao.component';

describe('IdentificacaoAlunoAvaliacaoComponent', () => {
  let component: IdentificacaoAlunoAvaliacaoComponent;
  let fixture: ComponentFixture<IdentificacaoAlunoAvaliacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificacaoAlunoAvaliacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificacaoAlunoAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
