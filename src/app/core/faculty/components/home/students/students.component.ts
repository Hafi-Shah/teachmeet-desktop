import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { ToastType, ToastHeading } from 'src/app/features/constants/toast-type';
import { HttpService } from 'src/app/features/services/http.service';
import { ToastService } from 'src/app/features/services/toast.service';
import { MeetDialogComponent } from 'src/app/shared/dialogs/meet-dialog/meet-dialog.component';
export interface StudentCard {
  id: number;
  name: string;
  status: boolean;
  department: string;
  profileImage: string;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  fName: string = 'Haroon';
  ref: DynamicDialogRef | undefined;
  searchTerm: string = '';
  facCardsRes!: StudentCard[];
  constructor(
    private router: Router,
    private dialogService: DialogService,
    private http: HttpService,
    private toast: ToastService
  ) {}
  show(status: boolean, id: number, fName: string, lName: string) {
    if (!status) {
      this.toast.showToast(
        ToastType.Info,
        ToastHeading.Info,
        'This user is currently offline.'
      );
    }
    if (status) {
      this.ref = this.dialogService.open(MeetDialogComponent, {
        data: {
          id: id,
        },
        header: `Meet - ${fName} ${lName}`,
        width: '50%',
      });
    }
  }
  getFacultyCards() {
    this.http.get<StudentCard[]>('Student/GetStudentCards').subscribe({
      next: (res) => {
        this.facCardsRes = res;
        console.log(this.facCardsRes);
      },
      error(err) {
        console.error(err);
      },
    });
  }

  ngOnInit(): void {
    this.getFacultyCards();
  }
}
