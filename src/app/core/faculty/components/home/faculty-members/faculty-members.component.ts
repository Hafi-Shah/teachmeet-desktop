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
  ref: DynamicDialogRef | undefined;
  constructor(private router: Router, private dialogService: DialogService) {}
  show() {
    this.ref = this.dialogService.open(MeetDialogComponent, { header: '' });
  }
  onRoute(path: any) {
    this.router.navigate([path]);
  }
}
