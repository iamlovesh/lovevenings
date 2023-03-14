import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  env = environment.apiUrl;
  constructor(private http: HttpClient) {}
  contact(data: any) {
    return this.http.post('/api', data);
  }
  getData() {
    return this.http.get(this.env + '/read');
  }
}
