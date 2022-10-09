import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisculpasComponent } from './disculpas.component';

describe('DisculpasComponent', () => {
  let component: DisculpasComponent;
  let fixture: ComponentFixture<DisculpasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisculpasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisculpasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
