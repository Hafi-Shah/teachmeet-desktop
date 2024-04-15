import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FacultyMembersComponent } from './components/home/faculty-members/faculty-members.component';
import { StudentsComponent } from './components/home/students/students.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';

@NgModule({
  declarations: [
    HomeComponent,
    FacultyMembersComponent,
    StudentsComponent,
    SettingsComponent,
    MyProfileComponent,
  ],
  exports: [StudentsComponent, FacultyMembersComponent],
  imports: [CommonModule, FacultyRoutingModule, SharedModule],
})
export class FacultyModule {}
