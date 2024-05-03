import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-student-details',
  templateUrl: './view-student-details.component.html',
  styleUrls: ['./view-student-details.component.css'],
})
export class ViewStudentDetailsComponent {
  constructor(private router: Router) {}
  onRoute(path: any) {
    this.router.navigate([path]);
  }
}
