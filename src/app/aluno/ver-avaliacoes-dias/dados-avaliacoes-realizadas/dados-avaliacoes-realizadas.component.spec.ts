import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosAvaliacoesRealizadasComponent } from './dados-avaliacoes-realizadas.component';

describe('DadosAvaliacoesRealizadasComponent', () => {
  let component: DadosAvaliacoesRealizadasComponent;
  let fixture: ComponentFixture<DadosAvaliacoesRealizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosAvaliacoesRealizadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosAvaliacoesRealizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
