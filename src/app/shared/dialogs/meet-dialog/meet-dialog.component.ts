import { Component, OnInit } from '@angular/core';
interface Message {
  id: number;
  message: string;
}

@Component({
  selector: 'app-meet-dialog',
  templateUrl: './meet-dialog.component.html',
  styleUrls: ['./meet-dialog.component.css'],
})
export class MeetDialogComponent implements OnInit {
  options: Message[] = [
    { id: 1, message: 'Meet me now, want to discuss some matter' },
    { id: 2, message: 'Meet me in 5min, want to discuss some matter' },
    { id: 3, message: 'Meet me in 10min, want to discuss some matter' },
    { id: 4, message: 'Meet me in 15min, want to discuss some matter' },
  ];
  selectedOption: Message | undefined;

  constructor() {}

  ngOnInit(): void {
    this.options;
  }
}
