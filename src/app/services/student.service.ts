import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  addStudent(student:any):Observable<any>{

   const url="http://localhost:8091/student/add-student";
   return this.http.post(url,student);
  }
  allStudent():Observable<any>{
    const url="http://localhost:8091/student/get-all-students";
    return this.http.get(url);
  }
  updateStudent(student:any):Observable<any>{
    const url="http://localhost:8091/student/update-student";
    return this.http.put(url,student);
  }
  getStudent(studentid:number):Observable<any>{
    const url="http://localhost:8091/student/get-student-by-id/"+studentid;
    return this.http.get(url);
  }
  deleteStudent(studentid:number):Observable<any>{
    const url="http://localhost:8091/student/delete-student/"+studentid;
    return this.http.delete(url,{responseType:'text'});
  }
}
