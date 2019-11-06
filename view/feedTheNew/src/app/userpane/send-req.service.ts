import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendReqService {

  constructor(private http : HttpClient) { }
  isLogin(){
    return localStorage.getItem('token')
  }
  url = 'http://localhost:3000/food/newuser'
  url1 = 'http://localhost:3000/food/pro'
  // const headers = new HttpHeaders()
  sendreq(reqData){
    
  const headers = new HttpHeaders()
  .set('Authorization',`Bearer ${this.isLogin()}` ); 
  return this.http.post<any>(this.url,
  reqData,
  {
      headers: headers
  }
);
}

getProfile(){
  const headers = new HttpHeaders()
  .set('Authorization',`Bearer ${this.isLogin()}` ); 
  return this.http.get<any>(this.url1, 
  {
      headers: headers
  }
);

}


}
