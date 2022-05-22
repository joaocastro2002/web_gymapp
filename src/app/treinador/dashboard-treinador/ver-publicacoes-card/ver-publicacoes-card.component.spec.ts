import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPublicacoesCardComponent } from './ver-publicacoes-card.component';

describe('VerPublicacoesCardComponent', () => {
  let component: VerPublicacoesCardComponent;
  let fixture: ComponentFixture<VerPublicacoesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPublicacoesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPublicacoesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
