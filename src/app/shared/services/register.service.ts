import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from './../models/user.model';
import { BaseApiService } from './base-api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class RegisterService extends BaseApiService {
  user: User;


  constructor(private http: Http) { 
    super();
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  register(user: User): Observable<User | string> {
    const data: Object = {
      email: user.email,
      password: user.password,
      name: user.name,
      surname: user.surname
    };
    return this.http.post(`${BaseApiService.baseApi}/user`, JSON.stringify(data), BaseApiService.defaultOptions)
      .map((res: Response) => {
        this.authenticate(res.json());
        return this.user;
      })
      .catch(this.handleError);
  }

  private authenticate(user: User): User {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
    return this.user;
  }

}
