import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoAdicionarMarcaComponent } from './botao-adicionar-marca.component';

describe('BotaoAdicionarMarcaComponent', () => {
  let component: BotaoAdicionarMarcaComponent;
  let fixture: ComponentFixture<BotaoAdicionarMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoAdicionarMarcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoAdicionarMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
