import { Component, OnInit } from '@angular/core';
import { AttendanceService } from 'src/app/services/attendance.service';
import { StudentService } from 'src/app/services/student.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-take-attendance',
  templateUrl: './take-attendance.component.html',
  styleUrls: ['./take-attendance.component.css'],
})
export class TakeAttendanceComponent implements OnInit {
  constructor(private subjectservice: SubjectService,private studentservice:StudentService,private attendanceservice:AttendanceService) {}
  ngOnInit(): void {
    this.getAllSubjects();
    this.getAllStudent();
  }
  subjectlist: any[] = [];
  studentlist: any[] = [];
  selectedstudent:any[]=[];
  selectedsubject:number=0;
  selectedDate:string='';
  selectedTime:string='';
  getAllSubjects() {
    this.subjectservice.getAllSubjects().subscribe((data) => {
      this.subjectlist = data;
      // console.log(this.subjectlist);
    });
  }
  getAllStudent(){
    this.studentservice.allStudent().subscribe((data)=>{
      this.studentlist=data;
      // console.log(this.studentlist);
    })
  }
  changeSubject(event: Event) {
    this.selectedsubject=Number((event.target as HTMLSelectElement).value);
  }
  changeDate(event: Event) {
    this.selectedDate= (event.target as HTMLSelectElement).value;
  }
  changeTime(event: Event) {
     this.selectedTime =(event.target as HTMLSelectElement).value;
  }
  toggleAll(event: any) {
    if(event.target.checked){
      this.selectedstudent=this.studentlist.map((student)=>
        student.id
     );
    }
    else{
      this.selectedstudent=[];
    }
    // console.log(this.selectedstudent);
  }
  toogleStudent(studentid: number) {
    if(this.selectedstudent.includes(studentid)){
      this.selectedstudent=this.selectedstudent.filter((id)=>
         id!==studentid)
    }
    else{
      this.selectedstudent.push(studentid);
    }
    // console.log(this.selectedstudent)
  }


  submitAttendance() {
    const attendancedata={
      username:localStorage.getItem('user'),
      date:this.selectedDate,
      time:this.selectedTime,
      studentIds: this.selectedstudent,  
        subjectId: this.selectedsubject

    }
console.log(attendancedata);

    this.attendanceservice.saveAttendance(attendancedata).subscribe((data)=>{
      this.selectedstudent = [];
      alert('Attendance successfully submitted!');
    })
    }

}
