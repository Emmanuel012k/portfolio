import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsEmployeeComponent } from './jobs-employee.component';

describe('JobsEmployeeComponent', () => {
  let component: JobsEmployeeComponent;
  let fixture: ComponentFixture<JobsEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobsEmployeeComponent]
    });
    fixture = TestBed.createComponent(JobsEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
