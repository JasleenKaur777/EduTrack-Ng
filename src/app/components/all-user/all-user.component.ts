import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css'],
})
export class AllUserComponent implements OnInit {
  constructor(private service: UserService) {}
  ngOnInit(): void {
    this.viewAll();
  }
  objlist: any[] = [];
  viewAll() {
    this.service.getAllUser().subscribe((data) => {
      this.objlist = data;
      console.log(data);
    });
  }
  DeleteUser(name: any) {
    const confirmDelete = confirm('Do you want to delete the user');
    if (confirmDelete) {
      this.service.DeleteUser(name).subscribe((data) => {
        alert(data);
        this.viewAll();
      });
    }
    else{
      alert("Not deleted the user")
    }
  }
}
