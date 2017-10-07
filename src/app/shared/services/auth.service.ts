import { Injectable } from '@angular/core';
import { User } from './../models/user.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BaseApiService } from './base-api.service';
import { ApiError } from '../models/api-error.model';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class AuthService extends BaseApiService {
  user: User;
  private userSubject: Subject<User>;

  constructor(private http: Http) {
    super();
    this.user = JSON.parse(localStorage.getItem('user'));
    this.userSubject = new Subject<User>();
  }

  isAuthenticated(): boolean {
    return this.user ? true : false;
  }

  getCurrentUser(): User {
    return this.user;
  }

  login(user: User): Observable<User | string> {
    const data: Object = {
      email: user.email,
      password: user.password
    };
    return this.http.post(`${BaseApiService.baseApi}/login`, JSON.stringify(data), BaseApiService.defaultOptions)
      .map((res: Response) => {
        this.authenticate(res.json());
        return this.user;
      })
      .catch(super.handleError);
  }

  private authenticate(user: User): User {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
    return this.user;
  }

  onUserChanges(): Observable<User> {
    return this.userSubject.asObservable();
  }

  logout(): Observable<boolean | string> {
    return this.http.post(`${BaseApiService.baseApi}/logout`, null, BaseApiService.defaultOptions)
      .map((res: Response) => {
        this.user = undefined;
        localStorage.removeItem('user');
        return res.status === 204;
      })
      .catch(this.handleError);
  }
}
