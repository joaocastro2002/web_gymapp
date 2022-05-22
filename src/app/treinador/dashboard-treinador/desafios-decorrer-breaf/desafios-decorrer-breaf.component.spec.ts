import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafiosDecorrerBreafComponent } from './desafios-decorrer-breaf.component';

describe('DesafiosDecorrerBreafComponent', () => {
  let component: DesafiosDecorrerBreafComponent;
  let fixture: ComponentFixture<DesafiosDecorrerBreafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesafiosDecorrerBreafComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesafiosDecorrerBreafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
