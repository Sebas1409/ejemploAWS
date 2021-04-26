import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DashService {
  private url: string = environment.url_api;
  constructor(private http: HttpClient) {}

  postBooks(payload) {
    return this.http.post(this.url + "registro?name="+payload.name+"&autor="+payload.autor,null);
  }
  getBooks() {
    return this.http.get(this.url + "libros");
  }
  deleteBooks(id: number) {
    return this.http.delete(this.url + "books/" + id);
  }
  putBooks(id: number, body: any) {
    return this.http.put(this.url + "books/" + id, body);
  }
}
