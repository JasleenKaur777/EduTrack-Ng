import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent implements OnInit {
  constructor(private service:SubjectService,private activate:ActivatedRoute,private route:Router){}
  subject_id=0;
  ngOnInit(): void {
    this.activate.params.subscribe((data)=>{
      this.subject_id=data['id'];
      console.log(data);

    })
    this.view();

  }
  subject={
    id:'',
    name:''
  }
  view(){
    this.service.getParticularSubject(this.subject_id).subscribe((data)=>{
      this.subject=data
    })
  }

updateSubject() {
this.service.updataSubject(this.subject).subscribe((data)=>{
  if(data!=null){
    alert('Subject is updated');

  }
  this.subject.id='';
  this.subject.name='';
  this.route.navigateByUrl('/all-subject');
})
}

}
