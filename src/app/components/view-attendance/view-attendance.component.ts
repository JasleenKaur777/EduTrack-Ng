import { Component, OnInit } from '@angular/core';
import { AttendanceService } from 'src/app/services/attendance.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.css']
})
export class ViewAttendanceComponent implements OnInit {
  constructor(private subjectservice: SubjectService, private attendanceService: AttendanceService) {}
subjectlist: any[] = [];
selectedsubject='';
selectedDate='';
selectedUser='';
selectedStudents: any;
isModalOpen: any;
ngOnInit(): void {
  this.getAllSubjects();
  this.selectedUser=localStorage.getItem('user') || '';
}
getAllSubjects() {
  this.subjectservice.getAllSubjects().subscribe((data) => {
    this.subjectlist = data;
    // console.log(this.subjectlist);
  });
}
changeSubject(event: any) {
  this.selectedsubject=event.target.value;
  }
  changeDate(event: any) {
   this.selectedDate=event.target.value;
    }

    closeModal() {
      this.isModalOpen = false;
    }

attendanceRecords: any;
fetchAttendanceRecords() {
  this.attendanceService.filteredAttendance(this.selectedUser, Number(this.selectedsubject), this.selectedDate).subscribe((res) => {
    this.attendanceRecords = res;
    if (this.attendanceRecords.length === 0) {
      alert("No attendance records found for the selected date");
    }
  })
}

fetchAllAttendanceRecords() {
  this.attendanceService.getAllAttendance().subscribe((res) => {
    this.attendanceRecords = res;
    if (this.attendanceRecords.length === 0) {
      alert("No attendance records found for the selected date");
    }
  })
}
showStudents(students: any[]) {
  this.selectedStudents = students;
  this.isModalOpen = true;
  console.log(this.selectedStudents);

}



}
