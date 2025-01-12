import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastHeading, ToastType } from 'src/app/features/constants/toast-type';
import { HttpService } from 'src/app/features/services/http.service';
import { StorageService } from 'src/app/features/services/storage.service';
import { ToastService } from 'src/app/features/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private router: Router,
    private toastService: ToastService,
    private httpService: HttpService,
    private StorageService: StorageService
  ) {}

  onSubmit() {
    if (this.form.invalid) {
      this.toastService.showToast(
        ToastType.Error,
        ToastHeading.Error,
        'Email and password both are required'
      );
      return;
    }

    if (this.form.valid) {
      const payload = {
        email: this.form.get('email')?.value,
        password: this.form.get('password')?.value,
      };

      this.httpService.post('Faculty/FacultyLogin', payload).subscribe({
        next: (response: any) => {
          // If API returns a success message (you can customize based on your API response)
          this.StorageService.storeFacultyId(response.id);
          this.toastService.showToast(
            ToastType.Success,
            ToastHeading.Success,
            response.message
          );
        },
        error: (error: HttpErrorResponse) => {
          // Check the status code directly
          if (error.status === 400) {
            this.toastService.showToast(
              ToastType.Error,
              ToastHeading.Error,
              error.error?.message
            );
          }
        },
        complete: () => {
          // Navigate on success
          this.router.navigate(['faculty/home']);
        },
      });
    }
  }

  onRoute(path: any) {
    this.router.navigate([path]);
  }
}
