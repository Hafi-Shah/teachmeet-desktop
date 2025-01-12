import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacultyDataById } from 'src/app/features/models/res/faculty-data-by-id-res';
import { FacultyService } from 'src/app/features/services/get-faculty-data.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  constructor(private router: Router, private facultyService: FacultyService) {}
  facultyData!: FacultyDataById;
  onRout(path: any) {
    this.router.navigate([path]);
  }

  onLogOut(path: string) {
    this.onRout(path);
  }

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

  ngOnInit(): void {
    this.getFacData();
  }
}
