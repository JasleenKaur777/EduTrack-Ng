import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http:HttpClient) { }
  addSubject(subject:any):Observable<any>{
    const url="http://localhost:8091/subject/add-subject";
    return this.http.post(url,subject);
  }
  getAllSubjects():Observable<any>{
    const url="http://localhost:8091/subject/get-all-subjects"
    return this.http.get(url);
  }
  getParticularSubject(id:number):Observable<any>{
    const url="http://localhost:8091/subject/get-subject-by-id/"+id;
    return this.http.get(url);
  }
  updataSubject(subject:any):Observable<any>{
    const url="http://localhost:8091/subject/update-subject";
    return this.http.put(url,subject);
  }
  deleteSubject(id:number):Observable<any>{
    const url="http://localhost:8091/subject/delete-subject/"+id;
    return this.http.delete(url,{'responseType':'text'});
  }
}
