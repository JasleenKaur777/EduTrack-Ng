import { Component, OnInit } from '@angular/core';
import { AttendanceService } from 'src/app/services/attendance.service';
import { SubjectService } from 'src/app/services/subject.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-all-attendance',
  templateUrl: './view-all-attendance.component.html',
  styleUrls: ['./view-all-attendance.component.css'],
})
export class ViewAllAttendanceComponent implements OnInit {

  constructor(
    private userservice: UserService,
    private subjectservice: SubjectService,
    private attendanceservice: AttendanceService
  ) {}
  ngOnInit(): void {
    this.getAllFaculty();
    this.getAllSubjects();
  }
  user: any[] = [];
  subjects: any[] = [];
  selectedDate: string = '';
  selectedUser:string='';
  selectedSubject:any='';
  attendancerecord: any[] = [];
  isModalOpen: boolean = false;
  selectedStudents: any[] = [];
  changeUser(event: any) {
    console.log(event.target.value);
    this.selectedUser=event.target.value;
  }
  getAllFaculty() {
    this.userservice.GetAllFaculty().subscribe((data) => {
      this.user = data;
      console.log(this.user);
    });
  }
  changeSubject(event: any) {
    console.log(event.target.value);
    this.selectedSubject=event.target.value;
  }
  getAllSubjects() {
    this.subjectservice.getAllSubjects().subscribe((data) => {
      this.subjects = data;
      console.log(this.subjects);
    });
  }
  changeDate(event: any) {
    this.selectedDate = event.target.value;
    console.log(this.selectedDate);
  }
  fetchAllAttendanceRecords() {
    this.attendanceservice.getAllAttendance().subscribe((data) => {
      console.log(data);
      this.attendancerecord = data;
      if (this.attendancerecord.length === 0) {
        alert('There is no attendance on this date');
      }
    });
  }
  fetchAttendanceRecords() {
    this.attendanceservice.getAttendance(this.selectedUser,this.selectedSubject,this.selectedDate).subscribe((data)=>{
      this.attendancerecord=data;
      if(this.attendancerecord.length===0){
        alert("There is no attendance on this date");
      }
    })
    }
    showStudents(students: any[]) {
      this.selectedStudents = students;
      this.isModalOpen = true;
      console.log(this.selectedStudents);
      }
      closeModal() {
        this.isModalOpen = false;
        }



}
