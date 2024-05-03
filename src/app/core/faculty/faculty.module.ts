import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FacultyMembersComponent } from './components/home/faculty-members/faculty-members.component';
import { StudentsComponent } from './components/home/students/students.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { ViewFacultyDetailsComponent } from './components/home/faculty-members/view-faculty-details/view-faculty-details.component';
import { ViewStudentDetailsComponent } from './components/home/students/view-student-details/view-student-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    FacultyMembersComponent,
    StudentsComponent,
    SettingsComponent,
    MyProfileComponent,
    ViewFacultyDetailsComponent,
    ViewStudentDetailsComponent,
  ],
  exports: [StudentsComponent, FacultyMembersComponent],
  imports: [
    CommonModule,
    FacultyRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class FacultyModule {}
