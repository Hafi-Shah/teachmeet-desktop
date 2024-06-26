import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  constructor(private router: Router) {}

  onRout(path: any) {
    this.router.navigate([path]);
  }

  onLogOut(path: string) {
    this.onRout(path);
  }
}
