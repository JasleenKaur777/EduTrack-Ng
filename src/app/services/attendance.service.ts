import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private http:HttpClient) { }
  filteredAttendance(user: string, subjectId: number, date: string): Observable<any> {
    const apiUrl = `http://localhost:8091/attendance/get-attendance/${user}/${subjectId}/${date}`;
    return this.http.get(apiUrl);
  }
  getAllAttendance():Observable<any>{
   const url="http://localhost:8091/attendance/get-all-attendance-records";
   return this.http.get(url);
  }
  getAttendance(faculty:string,subject:any,date:string):Observable<any>{
   const url=`http://localhost:8091/attendance/get-attendance/${faculty}/${subject}/${date}`;
   return this.http.get(url);
  }
  saveAttendance(attendance:any):Observable<any>{
    const url="http://localhost:8091/attendance/take-attendance";
    const httpOptions = {
      headers: new HttpHeaders({
          "Content-Type": "application/json"
      })
  };

  return this.http.post(url, attendance, httpOptions);
  }
}
