import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { Http, URLSearchParams, RequestOptions } from '@angular/http';
import { ApiError } from '../models/api-error.model';
import { Observable } from 'rxjs/Rx';
import { Trip } from './../models/trip.model';
import { User } from './../models/user.model';


@Injectable()
export class MytripsService extends BaseApiService {
  private static baseEndPoint = `${BaseApiService.baseApi}/user/trips`;
  trips: Array<Trip> = [];
  user: User;
  trip: Trip;

  constructor(
    private http: Http,
    private authService: AuthService) {
    super()
    this.user = this.authService.getCurrentUser();
   }

  getMyTrips(): Observable<Array<Trip>> {
    return this.http.get(MytripsService.baseEndPoint, BaseApiService.defaultOptions)
    .map(res => res.json())
    .catch(super.handleError);
  }

  getUserTripDetails(trip_id: string): Observable<Trip> {
    return this.http.get(`${BaseApiService.baseApi}/user/trips/${trip_id}`, BaseApiService.defaultOptions)
      .map(res => res.json())
      .catch(super.handleError);
  }

  editUserTripDetails(trip: Trip): Observable<Trip> {
    this.trip = trip;
    return this.http.put(`${BaseApiService.baseApi}/user/trips/${trip._id}`, JSON.stringify(trip), BaseApiService.defaultOptions)
      .map(res => res.json())
      .catch(super.handleError);
  }

}
