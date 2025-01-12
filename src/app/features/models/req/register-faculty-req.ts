export interface RegisterFaculty {
  id: number;
  firstName: string;
  lastName: string;
  description: string;
  titleId: number;
  departmentId: number;
  email: string;
  password: string;
  genderId: number;
  profileImage: string;
  mobileNumber: string;
  officeTimingIds: number[];
}
