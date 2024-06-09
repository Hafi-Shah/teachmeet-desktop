import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-meet-dialog',
  templateUrl: './meet-dialog.component.html',
  styleUrls: ['./meet-dialog.component.css'],
})
export class MeetDialogComponent implements OnInit {
  constructor(private ref: DynamicDialogRef) {}
  hideDialog() {
    this.ref.close();
  }
  ngOnInit(): void {}
}
