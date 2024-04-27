import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFacultyDetailsComponent } from './view-faculty-details.component';

describe('ViewFacultyDetailsComponent', () => {
  let component: ViewFacultyDetailsComponent;
  let fixture: ComponentFixture<ViewFacultyDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewFacultyDetailsComponent]
    });
    fixture = TestBed.createComponent(ViewFacultyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
