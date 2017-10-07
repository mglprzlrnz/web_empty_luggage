import { ActivatedRoute } from '@angular/router';
import { Trip } from './../../shared/models/trip.model';
import { Component, OnInit } from '@angular/core';
import { MytripsService } from '../../shared/services/mytrips.service';

@Component({
  selector: 'app-user-trip-details',
  templateUrl: './user-trip-details.component.html',
  styleUrls: ['./user-trip-details.component.css']
})
export class UserTripDetailsComponent implements OnInit {
  trip: Trip;
  
    constructor(private mytripsService:MytripsService, private routes: ActivatedRoute) { }
  
    ngOnInit() {
      this.routes.params.subscribe(
        params => {
          this.mytripsService.getUserTripDetails(params['id']).subscribe(
            trip => this.trip = trip
          )
        }
      )
    }
  
  }
  