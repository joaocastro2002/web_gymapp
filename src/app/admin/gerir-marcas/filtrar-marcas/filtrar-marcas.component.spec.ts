import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarMarcasComponent } from './filtrar-marcas.component';

describe('FiltrarMarcasComponent', () => {
  let component: FiltrarMarcasComponent;
  let fixture: ComponentFixture<FiltrarMarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrarMarcasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrarMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
