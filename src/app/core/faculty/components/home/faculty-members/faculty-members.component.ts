import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ToastHeading, ToastType } from 'src/app/features/constants/toast-type';
import { FacultyCardsRes } from 'src/app/features/models/res/faculty-cards-.res';
import { HttpService } from 'src/app/features/services/http.service';
import { ToastService } from 'src/app/features/services/toast.service';
import { MeetDialogComponent } from 'src/app/shared/dialogs/meet-dialog/meet-dialog.component';

@Component({
  selector: 'app-faculty-members',
  templateUrl: './faculty-members.component.html',
  styleUrls: ['./faculty-members.component.css'],
})
export class FacultyMembersComponent implements OnInit {
  fName: string = 'Haroon';
  ref: DynamicDialogRef | undefined;
  searchTerm: string = '';
  facCardsRes!: FacultyCardsRes[];
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
    this.http.get<FacultyCardsRes[]>('Faculty/GetFacultyCards').subscribe({
      next: (res) => {
        this.facCardsRes = res;
        console.log(this.facCardsRes);
      },
      error(err) {
        console.error(err);
      },
    });
  }
  onView(id: number) {
    this.router.navigate(['faculty/view-faculty-details'], {
      state: { id: id },
    });
  }

  ngOnInit(): void {
    this.getFacultyCards();
  }
}
