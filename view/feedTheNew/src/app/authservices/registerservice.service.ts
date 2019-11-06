import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Form} from '../auth/form'

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  private _url = "http://localhost:3000/food/register";
  constructor(private _http : HttpClient) { }
  register(user : Form){
   return this._http.post<any>(this._url,user)
  //  .map((res: Response) => res.text());

  }
  
}
