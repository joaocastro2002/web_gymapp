import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMarcasComponent } from './card-marcas.component';

describe('CardMarcasComponent', () => {
  let component: CardMarcasComponent;
  let fixture: ComponentFixture<CardMarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMarcasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
