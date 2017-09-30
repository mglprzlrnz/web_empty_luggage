import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { Http, URLSearchParams, RequestOptions } from '@angular/http';
import { ApiError } from '../models/api-error.model';
import { Observable } from 'rxjs/Rx';
import { Trip } from './../models/trip.model';
import { TripSearcher } from './../models/trip-searcher.model';

@Injectable()
export class TripsService extends BaseApiService {
  private static baseEndPoint = `${BaseApiService.baseApi}/trips`;
  trips: Array<Trip> = [];

  constructor(private http: Http) {
    super ();
    this.trips = JSON.parse(localStorage.getItem('trips'));
   }

  getAll(tripSearcher: TripSearcher): Observable<Array<Trip>> {
    let queryParams = new URLSearchParams();
    for(let param in tripSearcher) {
      if (tripSearcher[param]) {
        queryParams.set(param, tripSearcher[param]);        
      }
    }

    let options = new RequestOptions({ search: queryParams, headers: BaseApiService.defaultHeaders, withCredentials: true });
    return this.http.get(TripsService.baseEndPoint, options)
      .map(res => {
        this.trips = res.json();
        localStorage.setItem('trips', JSON.stringify(this.trips));
        return this.trips;
      })
      .catch(super.handleError);
  }

  getRecents(): Observable<Array<Trip>> {
    return this.http.get(TripsService.baseEndPoint, BaseApiService.defaultOptions)
    .map(res => res.json())
    .catch(super.handleError);
  }
 

}
