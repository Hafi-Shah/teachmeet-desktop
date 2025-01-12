import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacultyDataById } from 'src/app/features/models/res/faculty-data-by-id-res';
import { FacultyService } from 'src/app/features/services/get-faculty-data.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
})
export class MyProfileComponent implements OnInit {
  facultyData!: FacultyDataById;
  constructor(private router: Router, private facultyService: FacultyService) {}

  getFacData(): void {
    this.facultyService.getFacultyData().subscribe({
      next: (response) => {
        this.facultyData = response;
        console.log(this.facultyData);
      },
      error: (err) => {
        console.error('Error fetching faculty data', err);
      },
    });
  }
  onRoute(path: any) {
    this.router.navigate([path]);
  }

  ngOnInit(): void {
    this.getFacData();
  }
}
