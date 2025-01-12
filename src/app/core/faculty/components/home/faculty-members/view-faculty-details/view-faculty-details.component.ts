import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacultyDataById } from 'src/app/features/models/res/faculty-data-by-id-res';
import { HttpService } from 'src/app/features/services/http.service';

@Component({
  selector: 'app-view-faculty-details',
  templateUrl: './view-faculty-details.component.html',
  styleUrls: ['./view-faculty-details.component.css'],
})
export class ViewFacultyDetailsComponent implements OnInit {
  facultyData!: FacultyDataById;
  facId: number = 0;
  constructor(private router: Router, private http: HttpService) {}

  getFacId() {
    const state = window.history.state;
    if (state.id) {
      this.facId = state.id;
      console.log(this.facId);
    }
  }

  getFacData(): void {
    this.http
      .get<FacultyDataById>(
        'Faculty/GetFacultyDetailById',
        new HttpParams().set('facultyId', this.facId)
      )
      .subscribe({
        next: (res) => {
          this.facultyData = res;
          console.log(this.facultyData);
        },
      });
  }
  onRoute(path: any) {
    this.router.navigate([path]);
  }

  ngOnInit(): void {
    this.getFacId();
    this.getFacData();
  }
}
