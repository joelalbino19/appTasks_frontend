import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LoginInterface, LoginInterfaceResponse } from '../../shared/interface/loginInterface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = environment.api + 'auth/';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  // getUsersApi(): Observable<any> {
  //   let url = this.apiUrl + `users`
  //   return this.http.get<userInterface[]>(url)
  // }

  async serLogin(form: LoginInterface): Promise<LoginInterfaceResponse> {
    const url = `${this.apiUrl}login`;
    const params: LoginInterface = {
      username: form.username,
      password: form.password
    };

    try {
      const response = await this.http.post<LoginInterfaceResponse>(url, params).toPromise();

      if (response === undefined) {
        throw new Error('No se recibió una respuesta válida del servidor.');
      }
      return response;
    } catch (error) {
      throw error;
    }
  }
}
