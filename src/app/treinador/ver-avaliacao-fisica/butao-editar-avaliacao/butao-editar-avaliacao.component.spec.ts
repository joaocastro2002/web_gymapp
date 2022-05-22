import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButaoEditarAvaliacaoComponent } from './butao-editar-avaliacao.component';

describe('ButaoEditarAvaliacaoComponent', () => {
  let component: ButaoEditarAvaliacaoComponent;
  let fixture: ComponentFixture<ButaoEditarAvaliacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButaoEditarAvaliacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButaoEditarAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
