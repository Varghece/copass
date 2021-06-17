import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDocExeComponent } from './loan-doc-exe.component';

describe('LoanDocExeComponent', () => {
  let component: LoanDocExeComponent;
  let fixture: ComponentFixture<LoanDocExeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanDocExeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDocExeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
