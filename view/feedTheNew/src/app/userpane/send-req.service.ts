import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SendReqService {
  constructor(private http: HttpClient) {}
  isLogin() {
    return localStorage.getItem("token");
  }
  url = "http://localhost:3000/food/newuser";
  url1 = "http://localhost:3000/food/pro";
  url2 = "http://localhost:3000/food/get";
  url3 = "http://localhost:3000/food/deldonation";
  url4 = "http://localhost:3000/food/orderfood";
  url5 = "http://localhost:3000/food/getmyord";
  url6 = "http://localhost:3000/food/delvered";
  url7 = "http://localhost:3000/food/cancelorder";

  cancelOrder(canceldata) {
    const headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${this.isLogin()}`
    );
    return this.http.post<any>(this.url7, canceldata, {
      headers: headers
    });
  }

  orderDelvered(dlvrddata) {
    console.log("Delivered Delete : ", dlvrddata);
    const headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${this.isLogin()}`
    );
    return this.http.post<any>(this.url6, dlvrddata, {
      headers: headers
    });
  }

  // Deleting Donation
  delDonation(id) {
    console.log("hey Iam token : ", id);
    const headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${this.isLogin()}`
    );
    return this.http.post<any>(this.url3, id, {
      headers: headers
    });
  }

  ordfood(ordfood) {
    console.log("from food order");
    const headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${this.isLogin()}`
    );
    return this.http.post<any>(this.url4, ordfood, {
      headers: headers
    });
  }

  get_myords() {
    const headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${this.isLogin()}`
    );
    return this.http.get<any>(this.url5, {
      headers: headers
    });
  }

  sendreq(reqData) {
    console.log("fromsend req");
    const headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${this.isLogin()}`
    );
    return this.http.post<any>(this.url, reqData, {
      headers: headers
    });
  }

  getProfile() {
    const headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${this.isLogin()}`
    );
    return this.http.get<any>(this.url1, {
      headers: headers
    });
  }
  getAllDonation() {
    const headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${this.isLogin()}`
    );
    return this.http.get<any>(this.url2, {
      headers: headers
    });
  }
}
