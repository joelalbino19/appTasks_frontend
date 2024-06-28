import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { userInterface } from '../shared/interface/userInterface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = environment.api;

  constructor(private http: HttpClient) { }

  getUsersApi(): Observable<any> {
    let url = this.apiUrl + `users`
    return this.http.get<userInterface[]>(url)
  }
}
