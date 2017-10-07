import { Component, OnInit } from '@angular/core';
import { Trip } from '../../shared/models/trip.model';
import { MytripsService } from '../../shared/services/mytrips.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.component.html',
  styleUrls: ['./my-trips.component.css']
})
export class MyTripsComponent implements OnInit {
  trips: Array<Trip> = [];
  
  constructor(private mytripsService: MytripsService) { }

  ngOnInit() {
    this.mytripsService.getMyTrips().subscribe(
      mytrips => this.trips = mytrips
    );
    

  }

}
