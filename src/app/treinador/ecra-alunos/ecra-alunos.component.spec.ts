import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcraAlunosComponent } from './ecra-alunos.component';

describe('EcraAlunosComponent', () => {
  let component: EcraAlunosComponent;
  let fixture: ComponentFixture<EcraAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcraAlunosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcraAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
