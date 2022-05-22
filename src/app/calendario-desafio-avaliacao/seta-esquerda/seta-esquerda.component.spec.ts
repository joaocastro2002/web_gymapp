import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetaEsquerdaComponent } from './seta-esquerda.component';

describe('SetaEsquerdaComponent', () => {
  let component: SetaEsquerdaComponent;
  let fixture: ComponentFixture<SetaEsquerdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetaEsquerdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetaEsquerdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
