import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarAvaliacaoComponentComponent } from './agendar-avaliacao-component.component';

describe('AgendarAvaliacaoComponentComponent', () => {
  let component: AgendarAvaliacaoComponentComponent;
  let fixture: ComponentFixture<AgendarAvaliacaoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendarAvaliacaoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendarAvaliacaoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
