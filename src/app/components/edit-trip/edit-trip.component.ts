import { MytripsService } from './../../shared/services/mytrips.service';
import { Trip } from './../../shared/models/trip.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {
  trip: Trip;
  error: Error;
  
  constructor(
    private mytripsService: MytripsService, 
    private routes: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit() {
    this.routes.params.subscribe(
      params => {
        this.mytripsService.getUserTripDetails(params['id']).subscribe(
          trip => this.trip = trip
        )
      }
    )
  }

  onSubmitEditTrip(editTrip): void {
    this.mytripsService.editUserTripDetails(this.trip).subscribe(
      (user) => {
        editTrip.reset();
        this.router.navigate(['/']);
      },
      (error) => { this.error = error.message; }
    );
  }


}
