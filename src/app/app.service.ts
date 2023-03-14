import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}
  contact(data: any) {
    return this.http.post('/api', data);
  }
  getData() {
    return this.http.get('/api/read');
  }
}
