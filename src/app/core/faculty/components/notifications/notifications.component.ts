import { HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/features/services/http.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export interface FacultyNotification {
  id: number;
  fromFacultyName: string;
  title: string;
  description: string;
  isRead: boolean;
  createdDate: string;
}

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent implements OnInit, OnDestroy {
  myFacId = sessionStorage.getItem('id');
  notificationList: FacultyNotification[] = [];
  private destroy$ = new Subject<void>(); // Subject to handle unsubscribe
  private intervalId: any; // Store interval ID

  constructor(private router: Router, private http: HttpService) {}

  onRoute(path: any) {
    this.router.navigate([path]);
  }

  getNotifications() {
    this.http
      .get(
        'Notification/GetFacultyNotification',
        new HttpParams().set('facultyId', String(this.myFacId))
      )
      .pipe(takeUntil(this.destroy$)) // Automatically unsubscribe on destroy
      .subscribe({
        next: (res: any) => {
          this.notificationList = res;
          console.log(this.notificationList);
        },
      });
  }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.getNotifications();
    }, 2000);
  }

  ngOnDestroy(): void {
    // Clear interval when the component is destroyed
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    // Complete the subject to trigger unsubscription
    this.destroy$.next();
    this.destroy$.complete();
  }
}
