import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-all-subject',
  templateUrl: './all-subject.component.html',
  styleUrls: ['./all-subject.component.css']
})
export class AllSubjectComponent implements OnInit {
  constructor(private service:SubjectService,private router:Router){}
  subjects:any=[];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   this.viewAllSubjects();
  }
  viewAllSubjects(){
    this.service.getAllSubjects().subscribe((data)=>{
      this.subjects=data;

    })
  }
deleteSubject(id: any) {
  let delete_subject=confirm("You want to delete the subject");
  if(delete_subject){
    this.service.deleteSubject(id).subscribe((data)=>{
      if(data=='deleted'){
         alert("Subject is deleted");
      }
    })
  }
  else{
    alert("Subject is not deleted");
  }
this.viewAllSubjects();

}
editSubject(id: any) {
console.log(id);
this.router.navigateByUrl(`/edit-subject/${id}`);
}


}
