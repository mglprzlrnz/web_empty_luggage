import { Component, OnInit } from '@angular/core';
import { Trip } from '../../shared/models/trip.model';
import { TripsService } from '../../shared/services/trips.service';

@Component({
  selector: 'app-top-trips',
  templateUrl: './top-trips.component.html',
  styleUrls: ['./top-trips.component.css']
})
export class TopTripsComponent implements OnInit {
  trips: Array<Trip> = [];
  
  constructor(private tripsService: TripsService) { }

  ngOnInit() {
    this.tripsService.getRecents().subscribe(
      recents => this.trips = recents
    );
  }

}
