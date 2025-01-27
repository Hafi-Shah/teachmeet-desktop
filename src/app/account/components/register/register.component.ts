import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ToastType, ToastHeading } from 'src/app/features/constants/toast-type';
import { HttpService } from 'src/app/features/services/http.service';
import { DropDownRes } from 'src/app/features/models/res/dropdown-res';
import { OfficeTiming } from 'src/app/features/models/res/office-timeings-res';
import { RegisterFaculty } from 'src/app/features/models/req/register-faculty-req';
import { ToastService } from 'src/app/features/services/toast.service';
export const ValidatorPattern = {
  NoSpecialCharacterWithoutNumeric: /^[a-zA-Z]+$/, // Only letters, no numbers or special characters
  NoSpecialCharacterWithNumeric: /^[a-zA-Z0-9]+$/, // Alphanumeric, no special characters
  Email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Standard email format
  NoSpecialCharacters: /^[a-zA-Z0-9\s]+$/,
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent implements OnInit {
  image = '';
  titles: DropDownRes[] = [];
  genders: DropDownRes[] = [];
  departments: DropDownRes[] = [];
  officeTimings: OfficeTiming[] = [];

  isFormValid = true;

  registerReqDTO!: RegisterFaculty;
  form = new FormGroup({
    fName: new FormControl('', [
      Validators.required,
      Validators.pattern(ValidatorPattern.NoSpecialCharacterWithoutNumeric),
    ]),
    lName: new FormControl('', [
      Validators.required,
      Validators.pattern(ValidatorPattern.NoSpecialCharacterWithoutNumeric),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(ValidatorPattern.Email),
    ]),
    password: new FormControl('', Validators.required),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]+$'),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.pattern(ValidatorPattern.NoSpecialCharacters),
    ]),
    title: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    officeTiming: new FormControl([], Validators.required),
    profilePic: new FormControl('', Validators.required),
  });

  constructor(
    private router: Router,
    private httpService: HttpService,
    private toastService: ToastService
  ) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.image = reader.result as string;
      };
      reader.readAsDataURL(file);
    } else {
      console.error('No file selected');
    }
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      this.toastService.showToast(
        ToastType.Error,
        ToastHeading.Error,
        'Please fill the required data'
      );
      return;
    }
    const selectedDepKey = Number(this.form.get('department')?.value);
    const selectedTitleKey = Number(this.form.get('title')?.value);
    const selectedGenderKey = Number(this.form.get('gender')?.value);

    const officeTimingValue = this.form.get('officeTiming')?.value || [];
    const selectedOfficeTimingsKeys: number[] = officeTimingValue.map(
      (timing: { id: number }) => timing.id
    );

    const payload: RegisterFaculty = {
      id: 0,
      firstName: this.form.get('fName')?.value ?? '',
      lastName: this.form.get('lName')?.value ?? '',
      email: this.form.get('email')?.value ?? '',
      password: this.form.get('password')?.value ?? '',
      mobileNumber: this.form.get('phone')?.value ?? '',
      description: this.form.get('description')?.value ?? '',
      titleId: selectedTitleKey,
      departmentId: selectedDepKey,
      genderId: selectedGenderKey,
      officeTimingIds: selectedOfficeTimingsKeys,
      profileImage: this.image ?? '',
    };

    this.httpService.post('Faculty/RegisterFaculty', payload).subscribe({
      next: () => {
        this.toastService.showToast(
          ToastType.Success,
          ToastHeading.Success,
          'Faculty Registration Successful, Now you can login.'
        );
      },
      error(error) {
        console.error(error);
      },
      complete: () => {
        this.router.navigate(['/']);
      },
    });
  }

  fetchAllData(): void {
    forkJoin({
      titles: this.httpService.get<any[]>(`Application/GetTitles`),
      genders: this.httpService.get<any[]>(`Application/GetGenders`),
      departments: this.httpService.get<any[]>(`Application/GetDepartments`),
      officeTimings: this.httpService.get<any[]>(
        `Application/GetOfficeTimings`
      ),
    }).subscribe({
      next: ({ titles, genders, departments, officeTimings }) => {
        this.titles = titles;
        this.genders = genders;
        this.departments = departments;
        this.officeTimings = officeTimings.map((ot) => ({
          ...ot,
          label: `${ot.day}: ${ot.startTime} - ${ot.endTime}`,
        }));
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
    });
  }
  onRoute(path: any) {
    this.router.navigate([path]);
  }
  ngOnInit(): void {
    this.fetchAllData();
  }
}
