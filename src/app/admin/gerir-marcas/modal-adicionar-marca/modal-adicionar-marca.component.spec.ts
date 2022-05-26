import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdicionarMarcaComponent } from './modal-adicionar-marca.component';

describe('ModalAdicionarMarcaComponent', () => {
  let component: ModalAdicionarMarcaComponent;
  let fixture: ComponentFixture<ModalAdicionarMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAdicionarMarcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAdicionarMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
