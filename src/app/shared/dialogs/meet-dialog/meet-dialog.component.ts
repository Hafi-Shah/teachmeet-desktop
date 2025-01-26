import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ToastType, ToastHeading } from 'src/app/features/constants/toast-type';
import { DropDownRes } from 'src/app/features/models/res/dropdown-res';
import { OfficeTiming } from 'src/app/features/models/res/office-timeings-res';
import { HttpService } from 'src/app/features/services/http.service';
import { ToastService } from 'src/app/features/services/toast.service';
export interface MeetingDetails {
  description: string;
  fromFacultyId: number;
  toFacultyId: number;
  officeTime: string;
}
@Component({
  selector: 'app-meet-dialog',
  templateUrl: './meet-dialog.component.html',
  styleUrls: ['./meet-dialog.component.css'],
})
export class MeetDialogComponent implements OnInit {
  facId: number = 0;
  facTimes: OfficeTiming[] = [];
  message = '';
  selectedTime: { day: string; startTime: string; endTime: string } | null =
    null;
  selectedTimeIndex: number | null = null;

  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private http: HttpService,
    private toastService: ToastService
  ) {}

  // Fetch faculty timings
  getFacTiming() {
    this.http
      .get<OfficeTiming[]>(
        'Faculty/GetTimingsOfFacultyById',
        new HttpParams().set('facultyId', this.facId)
      )
      .subscribe({
        next: (response) => {
          this.facTimes = response;
          console.log(this.facTimes);
        },
      });
  }

  // Select time and store selected time and index
  selectTime(
    index: number,
    time: { day: string; startTime: string; endTime: string }
  ): void {
    this.selectedTimeIndex = index;
    this.selectedTime = time;
    console.log('Selected time:', time);
  }

  // Format time string
  formatTime(time: {
    day: string;
    startTime: string;
    endTime: string;
  }): string {
    return `${time.day}: start time: ${time.startTime} - end time: ${time.endTime}`;
  }

  // Send request with selected time and message
  sendRequest(): void {
    if (!this.selectedTime) {
      this.toastService.showToast(
        ToastType.Warning,
        ToastHeading.Warning,
        'please select office time'
      );
      return;
    }
    if (!this.message) {
      this.toastService.showToast(
        ToastType.Warning,
        ToastHeading.Warning,
        'please enter meeting message'
      );
      return;
    }
    const payload: MeetingDetails = {
      description: this.message,
      fromFacultyId: Number(sessionStorage.getItem('id')),
      toFacultyId: this.facId,
      officeTime: this.formatTime(this.selectedTime),
    };

    console.log(payload);

    this.http
      .post('Notification/CreateFacultyNotification', payload)
      .subscribe({
        next: (response: any) => {
          this.toastService.showToast(
            ToastType.Success,
            ToastHeading.Success,
            response.message
          );
        },
        complete: () => {
          this.hideDialog();
        },
      });
  }

  ngOnInit(): void {
    this.facId = this.config.data.id;
    console.log(this.facId);
    setTimeout(() => {
      this.getFacTiming();
    }, 100);
  }

  // Close dialog
  hideDialog(): void {
    this.ref.close();
  }
}
