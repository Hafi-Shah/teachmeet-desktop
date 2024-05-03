import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  constructor(private router: Router) {}
  onRoute(path: any) {
    this.router.navigate([path]);
  }
}
