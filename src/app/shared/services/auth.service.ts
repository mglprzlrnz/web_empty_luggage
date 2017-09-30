import { Injectable } from '@angular/core';
import { User } from './../models/user.model';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BaseApiService } from './base-api.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class AuthService {

  constructor() { }

}
