import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacoesAplicacaoComponent } from './notificacoes-aplicacao.component';

describe('NotificacoesAplicacaoComponent', () => {
  let component: NotificacoesAplicacaoComponent;
  let fixture: ComponentFixture<NotificacoesAplicacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificacoesAplicacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacoesAplicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
