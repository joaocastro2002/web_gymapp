import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoAvaliacaoComponent } from './botao-avaliacao.component';

describe('BotaoAvaliacaoComponent', () => {
  let component: BotaoAvaliacaoComponent;
  let fixture: ComponentFixture<BotaoAvaliacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoAvaliacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
