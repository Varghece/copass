import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditSanctionComponent } from './credit-sanction.component';

describe('CreditSanctionComponent', () => {
  let component: CreditSanctionComponent;
  let fixture: ComponentFixture<CreditSanctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditSanctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditSanctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
