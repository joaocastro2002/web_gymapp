import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosAlunoAvaliacaoComponent } from './dados-aluno-avaliacao.component';

describe('DadosAlunoAvaliacaoComponent', () => {
  let component: DadosAlunoAvaliacaoComponent;
  let fixture: ComponentFixture<DadosAlunoAvaliacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosAlunoAvaliacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosAlunoAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
