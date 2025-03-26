import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
constructor(private service:UserService,private router:Router){

}
loginForm=new FormGroup({
  username:new FormControl('',Validators.required),
  password:new FormControl('',Validators.required)
})
error='';
formLogin() {
  if(this.loginForm.valid){

// console.log(JSON.stringify(this.loginForm.value))
  this.service.loginService(this.loginForm.value).subscribe((data)=>{
    console.log(data);
    if(data==null){
        this.error='Provide the correct information';
    }
    else{
      localStorage.setItem('user', data.username);
      localStorage.setItem('role',data.role);
      if(data.role==='admin'){
        this.router.navigateByUrl("admin-dashboard")
      }
      else if(data.role==='faculty'){
        this.router.navigateByUrl("faculty-dashboard");
      }

      // alert("Successfully registered!!!")
    }
  })


  }

  }
}
