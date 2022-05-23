import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoDesafioComponent } from './botao-desafio.component';

describe('BotaoDesafioComponent', () => {
  let component: BotaoDesafioComponent;
  let fixture: ComponentFixture<BotaoDesafioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoDesafioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoDesafioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
