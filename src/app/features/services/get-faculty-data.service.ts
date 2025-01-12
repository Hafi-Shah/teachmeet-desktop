import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FacultyDataById } from '../models/res/faculty-data-by-id-res';

@Injectable({ providedIn: 'root' })
export class FacultyService {
  constructor(
    private httpService: HttpService,
    private storageService: StorageService
  ) {}

  getFacultyData(): Observable<FacultyDataById> {
    const id = this.storageService.getValidFacultyId();
    return this.httpService.get<FacultyDataById>(
      'Faculty/GetFacultyDetailById',
      new HttpParams().set('facultyId', id.toString())
    );
  }
}
