import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms'; // Import necessary form modules
import { StorageService } from 'src/app/features/services/storage.service';
import { HttpService } from 'src/app/features/services/http.service';
import { ToastService } from 'src/app/features/services/toast.service';
import { ToastHeading, ToastType } from 'src/app/features/constants/toast-type';
import { FacultyService } from 'src/app/features/services/get-faculty-data.service';
import { FacultyDataById } from 'src/app/features/models/res/faculty-data-by-id-res';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  settingsForm: FormGroup | any;

  isInitialized = false;
  status: { facultyId: number; status: boolean } = {
    facultyId: 0,
    status: false,
  };

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private storageService: StorageService,
    private http: HttpService,
    private toastService: ToastService,
    private facultyService: FacultyService
  ) {}

  initializeForm() {
    this.settingsForm = this.formBuilder.group({
      status: [this.status.status],
    });
  }

  onRoute(path: any) {
    this.router.navigate([path]);
  }

  switchValue() {
    this.status.facultyId = this.storageService.getValidFacultyId();

    // Subscribe to the status change and only send API request if not initialized
    this.settingsForm.get('status').valueChanges.subscribe((value: boolean) => {
      if (this.isInitialized) {
        this.status.status = value;
        this.http.post('Faculty/ChangeFacultyStatus', this.status).subscribe({
          next: (response: any) => {
            this.toastService.showToast(
              ToastType.Success,
              ToastHeading.Success,
              response.message
            );
            console.log(this.status);
          },
          error(err) {
            console.error(err);
          },
        });
      }
    });
  }

  getFacData(): void {
    this.facultyService.getFacultyData().subscribe({
      next: (response: FacultyDataById) => {
        this.status.status = response.faculty.status;
        this.settingsForm.get('status').setValue(this.status.status);
        console.log(this.status);

        // Mark initialization as complete
        this.isInitialized = true;
      },
      error: (err) => {
        console.error('Error fetching faculty data', err);
      },
    });
  }

  ngOnInit() {
    this.initializeForm();
    this.switchValue();
    this.getFacData();
  }
}
