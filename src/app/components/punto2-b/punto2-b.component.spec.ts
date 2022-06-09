import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto2BComponent } from './punto2-b.component';

describe('Punto2BComponent', () => {
  let component: Punto2BComponent;
  let fixture: ComponentFixture<Punto2BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto2BComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto2BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
