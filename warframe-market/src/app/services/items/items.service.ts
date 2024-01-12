import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor(private http: HttpClient) { }

  getAllItems(): Observable<any> {
    return this.http.get<any>('/v1/items');
  }
}
