import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginAsUser: string;

  constructor(private http: HttpClient) {
    this.loginAsUser = "http://localhost:4200/" + 'user';
  }

  loginUser(username: string, password: string):Observable<User> {
    return this.http.get<User>(this.loginAsUser+username+"/"+password);
  }

}