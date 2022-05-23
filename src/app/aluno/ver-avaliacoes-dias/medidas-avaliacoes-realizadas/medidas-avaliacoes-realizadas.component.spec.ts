import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidasAvaliacoesRealizadasComponent } from './medidas-avaliacoes-realizadas.component';

describe('MedidasAvaliacoesRealizadasComponent', () => {
  let component: MedidasAvaliacoesRealizadasComponent;
  let fixture: ComponentFixture<MedidasAvaliacoesRealizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedidasAvaliacoesRealizadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedidasAvaliacoesRealizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
