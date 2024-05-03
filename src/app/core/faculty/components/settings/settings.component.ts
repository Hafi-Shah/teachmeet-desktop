import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms'; // Import necessary form modules

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  settingsForm: FormGroup | any;

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  initializeForm() {
    this.settingsForm = this.formBuilder.group({
      status: this.formBuilder.control(''),
    });
  }

  onRoute(path: any) {
    this.router.navigate([path]);
  }

  swtichValue() {
    debugger;
    console.log(
      'Initial value of switch:',
      this.settingsForm.get('status').value
    );
    this.settingsForm.get('status').valueChanges.subscribe((value: any) => {
      console.log('status value changed:', value);
    });
  }

  // listenToFormChanges() {
  //   this.settingsForm.get('status').valueChanges.subscribe((value) => {
  //     this.onStatusChange(value);
  //   });
  // }

  ngOnInit() {
    this.initializeForm();
    this.swtichValue();
    // this.listenToFormChanges();
  }
}
