import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalQltyCheckComponent } from './final-qlty-check.component';

describe('FinalQltyCheckComponent', () => {
  let component: FinalQltyCheckComponent;
  let fixture: ComponentFixture<FinalQltyCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalQltyCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalQltyCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
