import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  loginService(user:any):Observable<any>{
   const url="http://localhost:8091/user/login-user";
   return this.http.post(url,user);
  }
  registerUser(user:any):Observable<any>{
    const url = "http://localhost:8091/user/register-user";
    return this.http.post(url, user, { responseType: 'text' });

  }
  getAllUser():Observable<any>{
    const url = "http://localhost:8091/user/get-all-user";
    return this.http.get(url);
  }
  DeleteUser(username:string):Observable<any>{
    const url="http://localhost:8091/user/delete-user-by-username?username="+username;
    return this.http.delete(url,{'responseType':'text'});
  }
  GetUser(username:string):Observable<any>{
    const url=`http://localhost:8091/user/get-user-by-username/${username}`;
    return this.http.get(url);
  }
  GetAllFaculty():Observable<any>{
    const url="http://localhost:8091/user/get-all-faculty";
    return this.http.get(url);
  }
}
