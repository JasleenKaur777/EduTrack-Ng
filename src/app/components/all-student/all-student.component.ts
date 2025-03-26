import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.css']
})
export class AllStudentComponent implements OnInit {


  constructor(private studentservice:StudentService,private route:Router){}
  ngOnInit(): void {
this.allStudents();

  }
  users:any[]=[];
  allStudents(){
    this.studentservice.allStudent().subscribe((data)=>{
      this.users=data;
    })
  }
  editUser(studentid: number) {
    this.route.navigateByUrl('/edit-student/'+studentid);
    }
    deleteUser(studentid: number) {
      this.studentservice.deleteStudent(studentid).subscribe((data)=>{
        if(data=="Deleted"){
          alert('The student is deleted');
          this.allStudents();
        }
        else{
          this.allStudents();
        }
      })
      }

}
