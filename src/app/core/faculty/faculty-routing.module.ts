import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ViewFacultyDetailsComponent } from './components/home/faculty-members/view-faculty-details/view-faculty-details.component';
import { ViewStudentDetailsComponent } from './components/home/students/view-student-details/view-student-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'myProfile', component: MyProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'view-faculty-details', component: ViewFacultyDetailsComponent },
  { path: 'view-student-details', component: ViewStudentDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacultyRoutingModule {}
