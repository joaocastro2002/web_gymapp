import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificacaoAlunoComponent } from './identificacao-aluno.component';

describe('IdentificacaoAlunoComponent', () => {
  let component: IdentificacaoAlunoComponent;
  let fixture: ComponentFixture<IdentificacaoAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificacaoAlunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificacaoAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
