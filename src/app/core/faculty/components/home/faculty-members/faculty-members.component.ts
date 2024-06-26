import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MeetDialogComponent } from 'src/app/shared/dialogs/meet-dialog/meet-dialog.component';

@Component({
  selector: 'app-faculty-members',
  templateUrl: './faculty-members.component.html',
  styleUrls: ['./faculty-members.component.css'],
})
export class FacultyMembersComponent {
  fName: string = 'Haroon';
  ref: DynamicDialogRef | undefined;
  constructor(private router: Router, private dialogService: DialogService) {}
  show() {
    this.ref = this.dialogService.open(MeetDialogComponent, {
      // data: {
      //   id: '51gF3',
      // },
      header: `Meet - ${this.fName}`,
      width: '50%',
    });
  }
  onRoute(path: any) {
    this.router.navigate([path]);
  }
}
