import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private apiEndpoint: string = 'http://localhost:3000/';

  get(url: string): Observable<Object>{ 
    return this.http.get(this.apiEndpoint+url);
  }

  post(url, body): Observable<Object>{
    return this.http.post(this.apiEndpoint+url, body);
  }
  
  put(url, body): Observable<Object>{
    return this.http.put(this.apiEndpoint+url, body);
  }
}
