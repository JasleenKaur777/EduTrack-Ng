import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  constructor(private active:ActivatedRoute,private studentservice:StudentService,private route:Router){}
  private studentid:number=0;
  ngOnInit(): void {
    this.active.params.subscribe((data:any)=>{
      this.studentid=data['id'];
      console.log(data);
      this.getStudent(this.studentid);
    })

  }
  studentForm=new FormGroup(
    {
      id:new FormControl(this.studentid),
      name:new FormControl(''),
      email:new FormControl('')
    }
  )
  getStudent(studentid:number){
   this.studentservice.getStudent(studentid).subscribe((data)=>{
     this.studentForm.patchValue({
      id:this.studentid,
      name:data.name,
      email:data.email
     })
   })
  }

updatestudent() {
  const updatedData = {
    id: this.studentid,
    ...this.studentForm.value
  };
  //console.log("Form Data: ", this.studentForm.value);
 this.studentservice.updateStudent(this.studentForm.value).subscribe((data)=>{
  if(data!=null){

    alert("Data is updated successfully!");
    this.studentForm.reset();
    this.route.navigateByUrl('/all-student');
  }
  else{
    alert("Updation is not successfull")
  }

 })
}

}
