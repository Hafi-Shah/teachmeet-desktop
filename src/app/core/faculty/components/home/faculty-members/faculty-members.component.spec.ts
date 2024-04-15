import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyMembersComponent } from './faculty-members.component';

describe('FacultyMembersComponent', () => {
  let component: FacultyMembersComponent;
  let fixture: ComponentFixture<FacultyMembersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultyMembersComponent]
    });
    fixture = TestBed.createComponent(FacultyMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
