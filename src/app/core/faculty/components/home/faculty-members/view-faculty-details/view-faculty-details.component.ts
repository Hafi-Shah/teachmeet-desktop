import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-faculty-details',
  templateUrl: './view-faculty-details.component.html',
  styleUrls: ['./view-faculty-details.component.css'],
})
export class ViewFacultyDetailsComponent {
  constructor(private router: Router) {}
  onRoute(path: any) {
    this.router.navigate([path]);
  }
}
