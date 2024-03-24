import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  a = 'hello';

  constructor(private router: Router) {}

  onRoute(path: any) {
    debugger;
    this.router.navigate([path]);
  }
}
