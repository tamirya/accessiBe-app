import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get('http://192.168.99.100:3000/api/items');
  }

  updateItem(item) {
    return this.http.put('http://192.168.99.100:3000/api/item/' + item._id + '/update', item);
  }

  addNewItem(item) {
    return this.http.post('http://192.168.99.100:3000/api/item/add', item);
  }
}
