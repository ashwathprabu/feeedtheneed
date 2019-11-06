import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
// import { Observable } from 'rxjs/internal/Observable';
// import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import {Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, throwError} from 'rxjs';
// import {catchError} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

private _url = 'http://localhost:3000/food/login' 
constructor(private _http : HttpClient) { }
login(user){
  return this._http.post<any>(this._url,user )
  
  // .map((res: Response) => res.json())
  // .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
}
isLogin(){
  return !!localStorage.getItem('token')
}
logout(){
  localStorage.removeItem('token')
}
}
