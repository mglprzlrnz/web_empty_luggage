import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Trip } from './../models/trip.model';
import { BaseApiService } from './base-api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class NewTripService extends BaseApiService {
  newTrip: Trip;
  user: User;

  constructor(private http: Http) { 
    super();
    this.user = JSON.parse(localStorage.getItem('user'));
    this.newTrip = JSON.parse(localStorage.getItem('newTrip'));
  }

  // createNewTrip(newTrip: Trip): Observable<User | string> {
  //   const data: Object = {
  //     owner: this.user._id,
  //     from: {
  //         city: newTrip.from.city,
  //         country: newTrip.from.country,
  //     },
  //     to: {
  //         city: newTrip.from.country,
  //         country: newTrip.from.country,
  //     };
  //     departureDateTime: newTrip.departure.date + newTrip.departure.time,
  //     arrivalDateTime: Date,
  //     bag: {
  //         restrictions: ,
  //         weight: newTrip.bag.weight,
  //         dimensions: {
  //             high: number,
  //             width: number,
  //         }  
  //     }
  //   };
  //   return this.http.post(`${BaseApiService.baseApi}/trips`, JSON.stringify(data), BaseApiService.defaultOptions)
  //     .map((res: Response) => {
  //       this.authenticate(res.json());
  //       return this.user;
  //     })
  //     .catch(this.handleError);
  // }

  // private authenticate(user: User): User {
  //   this.user = user;
  //   localStorage.setItem('user', JSON.stringify(user));
  //   return this.user;
  // }

}
