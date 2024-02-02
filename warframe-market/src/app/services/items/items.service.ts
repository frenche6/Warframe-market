import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AllItemsRoot, ItemSetRoot, OrderRoot} from "../../models/root";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor(private http: HttpClient) { }

  getAllItems(): Observable<AllItemsRoot> {
    return this.http.get<any>('/v1/items');
  }

  getItemSet(itemName: string): Observable<ItemSetRoot> {
    let headers = new HttpHeaders();
    headers = headers.append('platform', 'pc');
    headers = headers.append('language', 'en');
    return this.http.get<any>('/v1/items/' + itemName, {headers: headers});
  }

  getItemOrders(itemName: string, includeItem: boolean = false): Observable<OrderRoot> {
    let headers = new HttpHeaders();
    headers = headers.append('platform', 'pc');
    headers = headers.append('language', 'en');
    let url = '/v1/items/' + itemName + '/orders';
    if (includeItem) {
      url += '?include=item';
    }
    return this.http.get<any>(url, {headers: headers});
  }

  saveAllItemsToLocalStorage(items: AllItemsRoot): void {

    // Check if it exists first
    if (localStorage.getItem('items') === null) {
      localStorage.setItem('items', JSON.stringify(items));
    }
    else {
      // If it does exist, check if it's the same
      let itemsInLocalStorage = localStorage.getItem('items');
      if (itemsInLocalStorage !== JSON.stringify(items)) {
        localStorage.setItem('items', JSON.stringify(items));
      }
    }
  }

  getAllItemsFromLocalStorage(): AllItemsRoot | null {
    let items = localStorage.getItem('items');
    if (items === null) { return null; }
    return JSON.parse(items);
  }


}
