import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayOptionsComponent } from './pay-options.component';

describe('PayOptionsComponent', () => {
  let component: PayOptionsComponent;
  let fixture: ComponentFixture<PayOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayOptionsComponent]
    });
    fixture = TestBed.createComponent(PayOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
