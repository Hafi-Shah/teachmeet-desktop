import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty-members',
  templateUrl: './faculty-members.component.html',
  styleUrls: ['./faculty-members.component.css'],
})
export class FacultyMembersComponent {
  constructor(private router: Router) {}
  onRoute(path: any) {
    this.router.navigate([path]);
  }
}
