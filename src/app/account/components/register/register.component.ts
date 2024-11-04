import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent implements OnInit {
  departmentList: { id: number; value: string }[] = [
    { id: 1, value: 'BSCS' },
    { id: 2, value: 'BBA' },
    { id: 3, value: 'BSSE' },
  ];

  TitleList: { id: number; value: string }[] = [
    { id: 1, value: 'HOD' },
    { id: 2, value: 'Sr Lecturer' },
    { id: 3, value: 'Lecturer' },
  ];

  officeTiming: { id: number; day: string; OfficeTime: string; name?: any }[] =
    [
      {
        id: 1,
        day: 'Monday',
        OfficeTime: '3pm - 6pm',
      },
      {
        id: 2,
        day: 'Tuesday',
        OfficeTime: '3pm - 6pm',
      },
    ];
  form = new FormGroup({
    department: new FormControl('', Validators.required),
    officeTiming: new FormControl('', Validators.required),
  });

  constructor(private router: Router) {}
  onRoute(path: any) {
    this.router.navigate([path]);
  }
  selectedOptions() {
    const selectedDepKey = this.form.get('departmentList')?.value;
    const selectedDepOpt = this.departmentList.find(
      (opt) => opt.id === selectedDepKey
    );
    const selectedTitleKey = this.form.get('title')?.value;
    const selectedTitleValue = this.TitleList.find(
      (opt) => opt.id === selectedTitleKey
    );
    console.log(
      'selected title:',
      selectedTitleValue ? selectedTitleValue : 'none'
    );

    console.log(
      'selected option:',
      selectedDepOpt ? selectedDepOpt.value : 'none'
    );
  }
  getOfficeTiming() {
    this.officeTiming = this.officeTiming.map((item) => ({
      ...item,
      name: `${item.day} - ${item.OfficeTime}`,
    }));
    return this.officeTiming;
  }
  onSubmit() {
    if (this.form.valid) {
      this.selectedOptions();
    } else {
      console.log('invalid data');
    }
  }
  ngOnInit(): void {
    this.getOfficeTiming();
  }
}
