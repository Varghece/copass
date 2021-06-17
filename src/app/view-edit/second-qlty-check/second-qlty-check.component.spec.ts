import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondQltyCheckComponent } from './second-qlty-check.component';

describe('SecondQltyCheckComponent', () => {
  let component: SecondQltyCheckComponent;
  let fixture: ComponentFixture<SecondQltyCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondQltyCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondQltyCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
