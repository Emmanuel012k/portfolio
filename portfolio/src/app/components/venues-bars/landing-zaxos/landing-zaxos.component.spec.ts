import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZaxosComponent } from './landing-zaxos.component';

describe('LandingZaxosComponent', () => {
  let component: LandingZaxosComponent;
  let fixture: ComponentFixture<LandingZaxosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZaxosComponent]
    });
    fixture = TestBed.createComponent(LandingZaxosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
