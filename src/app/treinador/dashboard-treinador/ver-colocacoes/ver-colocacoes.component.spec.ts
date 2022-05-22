import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerColocacoesComponent } from './ver-colocacoes.component';

describe('VerColocacoesComponent', () => {
  let component: VerColocacoesComponent;
  let fixture: ComponentFixture<VerColocacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerColocacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerColocacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
