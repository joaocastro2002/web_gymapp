import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanosTreinoComponent } from './planos-treino.component';

describe('PlanosTreinoComponent', () => {
  let component: PlanosTreinoComponent;
  let fixture: ComponentFixture<PlanosTreinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanosTreinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanosTreinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
