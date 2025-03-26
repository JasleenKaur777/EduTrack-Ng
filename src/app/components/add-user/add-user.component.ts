import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  constructor(private service:UserService){}
user={
username:'',
password:'',
firstName:'',
lastName:'',
email:'',
role:''
}
addUser() {
  this.service.registerUser(this.user).subscribe((data)=>{
    alert(data);
    this.user.username='';
    this.user.password='',
    this.user.firstName='',
    this.user.lastName='',
    this.user.email='',
    this.user.role=''
  })
  }
}
