import { Component, OnInit } from '@angular/core';
import { TripsService } from '../../shared/services/trips.service';
import { Trip } from '../../shared/models/trip.model';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-finder-results',
  templateUrl: './finder-results.component.html',
  styleUrls: ['./finder-results.component.css']
})
export class FinderResultsComponent implements OnInit {
  trips: Array<Trip> = [];
  error: string;
  
  constructor(private tripsService: TripsService) {}
  
  ngOnInit() {
    this.trips = this.tripsService.trips;
  }

}
