import { ActivatedRoute } from '@angular/router';
import { Trip } from './../../shared/models/trip.model';
import { Component, OnInit } from '@angular/core';
import { TripsService } from '../../shared/services/trips.service';


@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent implements OnInit {
  trip: Trip;

  constructor(private tripsService:TripsService, private routes: ActivatedRoute) { }

  ngOnInit() {
    this.routes.params.subscribe(
      params => {
        this.tripsService.getTripDetails(params['id']).subscribe(
          trip => this.trip = trip
        )
      }
    )
  }

}
