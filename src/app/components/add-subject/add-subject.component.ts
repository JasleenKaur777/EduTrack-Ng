import { Component } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent {
constructor(private service:SubjectService){}
subject: any = {
  name: ''
};
addSubject() {
//  console.log(this.subject);
 this.service.addSubject(this.subject).subscribe((data)=>{
  // console.log(data);
  if(data!=null){
    this.subject.name='';
    alert(`Subject: ${this.subject.name} is registered`);
  }
  else{

    alert(`Subject: ${this.subject.name} is not registered`);
    this.subject.name='';
  }

 })
  }
}
