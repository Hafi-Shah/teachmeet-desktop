import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
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

  officeTiming: {
    id: number;
    day: string;
    startTime: string;
    endTime: string;
  }[] = [
    {
      id: 1,
      day: 'Monday',
      startTime: '3pm',
      endTime: '6pm',
    },
    {
      id: 2,
      day: 'Tuesday',
      startTime: '2pm',
      endTime: '5pm',
    },
    {
      id: 3,
      day: 'Wednesday',
      startTime: '4pm',
      endTime: '7pm',
    },
  ];

  form = new FormGroup({
    department: new FormControl('', Validators.required),
    officeTiming: new FormArray([]),
  });

  constructor(private router: Router) {}
  onRoute(path: any) {
    this.router.navigate([path]);
  }

  get getOfficeTiming(): FormArray {
    return this.form.get('officeTiming') as FormArray;
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
  // getOfficeTiming() {
  //   this.officeTiming = this.officeTiming.map((item) => ({
  //     ...item,
  //     name: `${item.day} - ${item.OfficeTime}`,
  //   }));
  //   return this.officeTiming;
  // }
  onSubmit() {
    if (this.form.valid) {
      this.selectedOptions();
    } else {
      console.log('invalid data');
    }
  }
  ngOnInit(): void {
    // this.getOfficeTiming();
  }
}
