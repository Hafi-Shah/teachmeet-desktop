import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  a = "hello";

  constructor(
    private router: Router
  ){}

  onRoute(path: any) {
    console.log(this.a);
    this.router.navigate([path]);
    
  }

  log(){
  console.log(this.a);
  this.router.navigate(['faculty/home']);
  }
}
