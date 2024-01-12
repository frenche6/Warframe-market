import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  signIn(username: string, password: string, auth_type: string = "cookie") :Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    const body = {
      "auth_type": auth_type,
      "username": username,
      "password": password
    }
    return this.http.post<any>('/v1/auth/signin', body, {headers: headers})
  }
}
