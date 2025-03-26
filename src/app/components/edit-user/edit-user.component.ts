import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  constructor(
    private activatedRouter: ActivatedRoute,
    private service: UserService
  ) {}
  user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    role: '',
  };
  ngOnInit(): void {
    let username = this.activatedRouter.snapshot.paramMap.get('username');
    this.getUserByUsername(username);
    console.log(username);
  }

  getUserByUsername(username: any) {
    this.service.GetUser(username).subscribe((data) => {
      this.user = data;
    });
  }
  updateUser() {
    throw new Error('Method not implemented.');
  }
}
