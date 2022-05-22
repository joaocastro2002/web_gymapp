import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAvaliacoesDiasComponent } from './ver-avaliacoes-dias.component';

describe('VerAvaliacoesDiasComponent', () => {
  let component: VerAvaliacoesDiasComponent;
  let fixture: ComponentFixture<VerAvaliacoesDiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerAvaliacoesDiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerAvaliacoesDiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
