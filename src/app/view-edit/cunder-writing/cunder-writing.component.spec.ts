import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CunderWritingComponent } from './cunder-writing.component';

describe('CunderWritingComponent', () => {
  let component: CunderWritingComponent;
  let fixture: ComponentFixture<CunderWritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CunderWritingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CunderWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
