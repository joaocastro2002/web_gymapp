import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoDesafioCardComponent } from './agendamento-desafio-card.component';

describe('AgendamentoDesafioCardComponent', () => {
  let component: AgendamentoDesafioCardComponent;
  let fixture: ComponentFixture<AgendamentoDesafioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgendamentoDesafioCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentoDesafioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
