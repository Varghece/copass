import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationSignoffComponent } from './validation-signoff.component';

describe('ValidationSignoffComponent', () => {
  let component: ValidationSignoffComponent;
  let fixture: ComponentFixture<ValidationSignoffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationSignoffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationSignoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
