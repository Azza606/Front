import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { 
    this.http=http;
}

saveUser(user:any): Observable<any>{
  const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
  return this.http.post("http://localhost:8080/registration" , user, {headers: headers});
  
}

}
