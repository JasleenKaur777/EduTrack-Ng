import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
constructor(private studentservice:StudentService){}
student=new FormGroup({
  name:new FormControl('',Validators.required),
  email:new FormControl('',Validators.email)
})
Submit() {
  if(this.student.valid){
    this.studentservice.addStudent(this.student.value).subscribe((data)=>{
      if(data!=null){
        alert("Student is registered");
      }
      else{
        alert("student is not registered");
      }
    })


  }
  else{
    alert("add the values")
  }

  }
}
