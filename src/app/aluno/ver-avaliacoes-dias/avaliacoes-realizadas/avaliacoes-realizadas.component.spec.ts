import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacoesRealizadasComponent } from './avaliacoes-realizadas.component';

describe('AvaliacoesRealizadasComponent', () => {
  let component: AvaliacoesRealizadasComponent;
  let fixture: ComponentFixture<AvaliacoesRealizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliacoesRealizadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliacoesRealizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
